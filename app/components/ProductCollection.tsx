import React from "react";
import { fetchProtectedAPI } from "../axios";
import { API_PATHS } from "../../constants";
import Image from "next/image";

const ProductCollection = async () => {
  let filteredData = [];
  try {
    const data = await fetchProtectedAPI(API_PATHS.PRODUCT_COLLECTION);
    filteredData = data.filter((el) => el.slug !== "uncategorized");
		console.log("Filtered Data:", filteredData);
  } catch (error) {
    console.error("Error fetching data:", error);
  }

  return (
    <section className="flex m-auto min-h-screen">
      {filteredData.map((el, i) => (
        <div
          className={``}
          key={el.id}
        >
          <h2>{el.name}</h2>
					{/* need to useeffect to set an active class and usestate to set the 1st child to be on active before anything is hovered  */}
					<div className="h-96 object-cover relative transition-transform duration-500 hover:scale-x-200">
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
