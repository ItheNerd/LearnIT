/* eslint-disable react/prop-types */
import React from "react";
const Navbar_Experimental = () => {
	const nav = ["Home", "Shop", "About", "Contact"];
	return (
		<div id="menu" className="flex h-screen w-screen items-center bg-gray-900 ">
			<div id="menu-items" className="peer group relative z-10 ml-24 md:ml-48">
				{nav.map((item, index) => {
					console.log("This is the index: ", index);
					return (
						<div
							key={index}
							className="block cursor-pointer p-4 text-7xl text-white transition-opacity duration-300 ease-linear hover:!opacity-100 group-hover:opacity-25"
							onMouseOver={() => {
								console.log({ index });
								const menu = document.getElementById("menu");
								menu.dataset.activeIndex = index;
							}}>
							{item}
						</div>
					);
				})}
			</div>
			<div
				id="menu-background-image"
				className="absolute left-0 top-0 z-0 h-full w-full bg-navImage bg-[length:50vmax] bg-center bg-no-repeat opacity-30 transition-[background-size,background-position,opacity] duration-700 ease-out peer-hover:bg-[length:70vmax] peer-hover:opacity-10"></div>
		</div>
	);
};

export default Navbar_Experimental;
