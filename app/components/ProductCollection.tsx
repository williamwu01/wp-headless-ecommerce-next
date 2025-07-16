"use client";
import React, { useState } from "react";
import Image from "next/image";

const ProductCollection = ({ data }) => {
  const [currentHover, setCurrentHover] = useState(1);

  return (
    <section className="relative flex m-auto items-end w-screen p-4">
      {data.map((el, i) => (
        <div
          className={`transition-all duration-500 ease-in-out ${currentHover === i ? "grow-[2]" : "grow-1"}`}
          key={el.id}
          onMouseEnter={() => setCurrentHover(i)}
        >
          <h2
            className={`absolute left-4 ${
              currentHover === i ? "block" : "hidden"
            }`}
          >
            {el.name}
          </h2>
          {/* need to useeffect to set an active class and usestate to set the 1st child to be on active before anything is hovered  */}
          <div className="mt-12 h-96 relative">
            <Image src={el.image.src} alt={el.image.alt} fill />
          </div>
        </div>
      ))}
    </section>
  );
};

export default ProductCollection;
