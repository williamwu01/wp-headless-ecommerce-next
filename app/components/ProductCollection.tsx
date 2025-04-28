import React from "react";
import { fetchProtectedAPI } from "../axios";
import { API_PATHS } from "../../constants";
import Image from "next/image";

const ProductCollection = async () => {
  let filteredData = [];
  try {
    const data = await fetchProtectedAPI(API_PATHS.PRODUCT_COLLECTION);
    filteredData = data.filter((el) => el.slug !== "uncategorized");
  } catch (error) {
    console.error("Error fetching data:", error);
  }

  return (
    <section className="flex ">
      {filteredData.map((el, i) => (
        <div
          className={``}
          key={el.id}
        >
          <h2>{el.name}</h2>
          <div className="h-96 relative">
            <Image
              src={el.image.src}
              alt={el.image.alt}
              fill
              className=""
            />
          </div>
        </div>
      ))}
    </section>
  );
};

export default ProductCollection;
