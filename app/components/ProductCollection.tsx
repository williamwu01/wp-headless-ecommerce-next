"use client";
import React from "react";
import Image from "next/image";

const ProductCollection = ({ data }) => {
  return (
    <section className="flex m-auto min-h-screen">
      {data.map((el, i) => (
        <div className={``} key={el.id}>
          <h2>{el.name}</h2>
          {/* need to useeffect to set an active class and usestate to set the 1st child to be on active before anything is hovered  */}
          <div className="h-96 object-cover relative transition-transform duration-500 hover:scale-x-200">
            <Image src={el.image.src} alt={el.image.alt} fill className="" />
          </div>
        </div>
      ))}
    </section>
  );
};

export default ProductCollection;
