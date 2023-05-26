/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Pallete from "../assets/animations/pallete";
const About = () => {
	return (
		<section id="gal" className="w-[120%] overflow-hidden">
			<Pallete />
			<div
				name="About"
				className="pointer-events-none relative z-10 flex min-h-[50vh] w-[83.333%] flex-col items-center justify-center px-4 md:h-[50vh]">
				<div className="mb-9 grid w-full max-w-[1000px] grid-cols-1">
					<h1 className="text-center text-3xl font-semibold capitalize text-gray-800 lg:text-4xl">
						About
					</h1>
				</div>
				<div className="grid w-full max-w-[1000px] grid-cols-2 gap-8">
					<div className="text-right text-xl font-bold">
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
							incidunt ex placeat modi magni quia error alias, adipisci rem
							similique, at omnis eligendi optio eos harum.
						</p>
					</div>
					<div>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
						incidunt ex placeat modi magni quia error alias, adipisci rem
						similique, at omnis eligendi optio eos harum.Lorem ipsum dolor sit
						amet consectetur adipisicing elit. Illo incidunt ex placeat modi
						magni quia error alias, adipisci rem similique, at omnis eligendi
						optio eos harum.Lorem ipsum dolor sit amet consectetur adipisicing
						elit. Illo incidunt ex placeat modi magni quia error alias, adipisci
						rem similique, at omnis eligendi optio eos harum.
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
