// app/layout.jsx
import React from "react";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { fetchAPI } from "./axios";
import { API_PATHS } from '../constants';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default async function RootLayout({ children }) {
  let header = {};
  let footer = {};

  try {
    // const path = "rae/v1/header-footer?header_location_id=hcms-menu-header&footer_location_id=hcms-menu-footer"; --mirgated to constants
    const data = await fetchAPI(API_PATHS.HEADER_FOOTER);

    header = data?.header || {};
    footer = data?.footer || {};
		console.log("Header/Footer data:", { header, footer });
  } catch (error) {
    console.error("Failed to fetch header/footer data:", error.message);
  }

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Header headerData={header} />
        {children}
        <Footer footerData={footer} />
      </body>
    </html>
  );
}