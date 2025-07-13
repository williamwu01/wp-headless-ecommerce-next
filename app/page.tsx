import React from "react";
import HomeComponent from "./components/HomeComponent";

import ProductCollection from "./components/ProductCollection";
import { fetchProtectedAPI } from "./axios";
import { API_PATHS } from "../constants";

export default async function Home() {
  const testData = await fetchProtectedAPI(API_PATHS.PRODUCT_COLLECTION);
  let filteredData = testData.filter((el) => el.slug !== "uncategorized");

  return (
    <div className="w-full flex justify-center items-center">
      <main className="flex flex-col gap-8 items-center sm:items-start">
        <HomeComponent />
        <ProductCollection data={filteredData} />
      </main>
    </div>
  );
}
