import Image from "next/image";
import React from "react";
import HomeComponent from "./components/HomeComponent";
import CategoryComponent from "./components/CategoryComponent";

export default function Home() {
  return (
		<div className="">
			<div className="w-full flex justify-center items-center">
				<main className="flex flex-col gap-8 items-center sm:items-start">
					<HomeComponent />
					<CategoryComponent />
				</main>
			</div>
		</div>
  );
}
