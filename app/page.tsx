import React from "react";
import HomeComponent from "./components/HomeComponent";
import ProductCollection from "./components/ProductCollection";

export default function Home() {
  return (
    <div className="w-full flex justify-center items-center">
      <main className="flex flex-col gap-8 items-center sm:items-start">
        <HomeComponent />
        <ProductCollection />
      </main>
    </div>
  );
}
