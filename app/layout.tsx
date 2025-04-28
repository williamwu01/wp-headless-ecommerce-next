// app/layout.jsx
import React from "react";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AudioPlayer from "../components/Audio"; // 🔊 import the player
import { navfetchAPI } from "./axios";
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
    const data = await navfetchAPI(API_PATHS.HEADER_FOOTER);
    header = data?.header || {};
    footer = data?.footer || {};
  } catch (error) {
    console.error("Failed to fetch header/footer data:", error.message);
  }

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased hero-bg`}>
        <Header headerData={header} />
        <AudioPlayer /> {/* 🔊 Sticky audio control in the top-right */}
        {children}
        {/* <Footer footerData={footer} /> */}
      </body>
    </html>
  );
}