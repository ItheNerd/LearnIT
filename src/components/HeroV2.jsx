import React from "react";
import Image1 from "../assets/images/banner/banner-image.png";

const HeroV2 = () => {
	return (
		<section>
			<div className="container mx-auto flex min-h-[66vh] flex-col items-center justify-center lg:flex-row lg:justify-between">
				<div className="w-full pt-7 text-center sm:pl-16 sm:text-left lg:w-1/2">
					<div className="lg:max-w-lg">
						<h1 className="text-6xl font-extrabold lg:text-[7.5rem]">
							<span className="bg-gradient-to-br from-teal-500 via-indigo-500 to-sky-500 bg-clip-text text-transparent">
								Learn
							</span>
							<span className="bg-gradient-to-tr from-indigo-500 via-sky-500 to-blue-900 bg-clip-text text-transparent">
								IT
							</span>
						</h1>
						<div className="mt-2 hidden space-y-5 sm:block">
							<p className="mx-2 flex items-center text-2xl font-semibold text-gray-700">
								The official IT club of MUJ
							</p>
						</div>
					</div>
					<div className="pointer-events-auto mt-8 flex items-center gap-3">
						<button className="nav_btn member btn hover:bg-blue-500">
							About Us
						</button>
						<div className="w-full focus-within:ring-opacity-40 lg:max-w-sm">
							<form className="flex rounded-xl border bg-white focus-within:border-blue-400 focus-within:ring focus-within:ring-blue-300 lg:flex-row ">
								<input
									type="email"
									placeholder="Enter your email address"
									className="m-1 h-10 w-7 flex-1 appearance-none border-none bg-transparent px-4 py-2 text-gray-700 placeholder-gray-400 focus:outline-none md:w-auto"
								/>
								<button
									type="button"
									className="nav_btn member btn hover:bg-blue-500">
									Join Us
								</button>
							</form>
						</div>
					</div>
				</div>

				<div className="relative h-80 translate-y-11 md:translate-y-0 lg:h-full">
					<div className="absolute top-0 left-6 h-80 w-80 animate-blob rounded-full bg-cyan-400 opacity-70 mix-blend-multiply blur-2xl filter"></div>
					<div className="animation-delay-2000 absolute top-10 -right-2 h-80 w-80 animate-blob rounded-full bg-indigo-300 opacity-70 mix-blend-multiply blur-2xl filter"></div>
					<div className="animation-delay-4000 absolute -bottom-9 left-28 h-80 w-80 animate-blob rounded-full bg-blue-400 opacity-70 mix-blend-multiply blur-2xl filter"></div>
					<img
						className="relative mx-auto h-full w-full object-cover lg:max-w-2xl"
						src={Image1}
						alt="glasses photo"
					/>
				</div>
			</div>
		</section>
	);
};

export default HeroV2;
