import React from "react";
import Image1 from "../assets/images/about/dots.jpg";
function Hero() {
	return (
		<section>
			<div className="container mx-auto px-6 py-16 text-center">
				<div className="mx-auto my-20 max-w-lg">
					<h1 className="hero text-3xl font-bold text-gray-800 lg:text-7xl">
						LearnIT
					</h1>
					<p className="mt-6  text-gray-500">
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero
						similique obcaecati illum mollitia.
					</p>
					<div className="mt-6 flex items-center gap-3">
						<button className="h-12 rounded-lg  bg-blue-600 px-6 py-2 text-center text-sm font-medium capitalize leading-5 text-white hover:bg-blue-500 focus:outline-none lg:mx-0 lg:w-auto before:bg-transparent">
							About Us
						</button>
						<div className="w-full rounded-md border bg-transparent focus-within:border-blue-400 focus-within:ring focus-within:ring-blue-300 focus-within:ring-opacity-40 lg:max-w-sm">
							<form className="flex flex-col lg:flex-row">
								<input
									type="email"
									placeholder="Enter your email address"
									className="m-1 h-10 flex-1 appearance-none border-none bg-transparent px-4 py-2 text-gray-700 placeholder-gray-400"
								/>
								<button
									type="button"
									className="m-1 h-10 transform rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-400">
									Sign IN
								</button>
							</form>
						</div>
					</div>
				</div>

				<div className="mt-10 flex justify-center">
					<img
						className="w-full rounded-xl object-cover lg:w-4/6"
						src={Image1}
					/>
				</div>
			</div>
		</section>
	);
}

export default Hero;
