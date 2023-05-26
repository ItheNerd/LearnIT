import { useState } from "react";
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import Logo from "../assets/images/logo.png";
const Nav = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const navList = ["Events", "Projects", "Team"];
	const icons = [
		<FaGithub key="" size={22} />,
		<FaInstagram key="" size={22} />,
		<FaLinkedin key="" size={22} />,
		<FaTwitter key="" size={22} />,
		<SiGmail key="" size={22} />,
	];
	return (
		<div className="mx-auto h-20 px-4 pt-4 text-lg sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8">
			<div className="relative z-10 grid grid-cols-2 items-center lg:grid-cols-3">
				<ul className="hidden items-center space-x-8 lg:flex">
					{navList.map((items, index) => {
						return (
							<li className="flex items-center" key={index}>
								<a
									href="/"
									className="nav_btn my-auto flex h-12 items-center px-4 font-medium tracking-wide text-gray-700">
									{items}
								</a>
							</li>
						);
					})}
				</ul>
				<a
					href="/"
					aria-label="Company"
					title="Company"
					className="inline-flex items-center lg:mx-auto">
					<img src={Logo} className="w-[2rem] py-2" alt="Logo" />

					<span className="ml-2 text-2xl font-bold tracking-wide text-gray-800">
						LearnIT
					</span>
				</a>
				<ul className="ml-auto hidden items-center space-x-8 lg:flex">
					<li className="flex items-center">
						<a
							href="/"
							className="nav_btn my-auto flex h-12 items-center px-4 font-medium tracking-wide text-gray-700">
							Contact
						</a>
					</li>
					<li>
						<a
							href="/"
							className="member nav_btn mr-2 h-12 bg-blue-500 font-medium tracking-wide text-white shadow-md"
							aria-label="Sign up"
							title="Sign up">
							Join Us
						</a>
					</li>
				</ul>
				<div className="ml-auto lg:hidden">
					<button
						aria-label="Open Menu"
						title="Open Menu"
						className="hover:bg-deep-purple-50 focus:bg-deep-purple-50 focus:shadow-outline -mr-1 rounded p-2 transition duration-200 focus:outline-none"
						onClick={() => setIsMenuOpen(true)}>
						<svg className="w-5 text-gray-600" viewBox="0 0 24 24">
							<path
								fill="currentColor"
								d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
							/>
							<path
								fill="currentColor"
								d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
							/>
							<path
								fill="currentColor"
								d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
							/>
						</svg>
					</button>
					{isMenuOpen && (
						<div className="absolute top-0 left-0 z-20 w-full bg-white">
							<div className="rounded border bg-white p-5 shadow-sm">
								<div className="mb-4 flex items-center justify-between">
									<div>
										<a
											href="/"
											aria-label="Company"
											title="Company"
											className="inline-flex items-center">
											<img src={Logo} className="w-[2rem] py-2" alt="Logo" />
											<span className="ml-2 text-xl font-bold capitalize tracking-wide text-gray-800">
												LearnIT
											</span>
										</a>
									</div>
									<div>
										<button
											aria-label="Close Menu"
											title="Close Menu"
											className="focus:shadow-outline -mt-2 -mr-2 rounded p-2 transition duration-200 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none"
											onClick={() => setIsMenuOpen(false)}>
											<svg className="w-5 text-gray-600" viewBox="0 0 24 24">
												<path
													fill="currentColor"
													d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
												/>
											</svg>
										</button>
									</div>
								</div>
								<nav>
									<ul className="space-y-4">
										<li>
											<a
												href="/"
												aria-label="Our product"
												title="Our product"
												className="hover:text-deep-purple-accent-400 font-medium tracking-wide text-gray-700 transition-colors duration-200">
												Product
											</a>
										</li>
										<li>
											<a
												href="/"
												aria-label="Our product"
												title="Our product"
												className="hover:text-deep-purple-accent-400 font-medium tracking-wide text-gray-700 transition-colors duration-200">
												Features
											</a>
										</li>
										<li>
											<a
												href="/"
												aria-label="Product pricing"
												title="Product pricing"
												className="hover:text-deep-purple-accent-400 font-medium tracking-wide text-gray-700 transition-colors duration-200">
												Pricing
											</a>
										</li>
										<li>
											<a
												href="/"
												aria-label="Sign in"
												title="Sign in"
												className="hover:text-deep-purple-accent-400 font-medium tracking-wide text-gray-700 transition-colors duration-200">
												Sign in
											</a>
										</li>
										<li>
											<a
												href="/"
												className="btn w-full border-0 bg-blue-500"
												aria-label="Sign up"
												title="Sign up">
												Sign up
											</a>
										</li>
									</ul>
								</nav>
							</div>
						</div>
					)}
				</div>
			</div>
			<div className="fixed top-96 right-0 z-30 hidden flex-col lg:flex">
				<ul className="before:absolute before:bottom-[100%] before:my-0 before:mx-10 before:block before:h-[50vh] before:w-[2px] before:bg-blue-500 before:content-[''] after:my-0 after:mx-10 after:block after:h-[50vh] after:w-[2px] after:bg-blue-500 after:content-['']">
					{icons.map((item, index) => {
						return (
							<li className="my-6 mx-7" key={index}>
								<a
									href="/"
									className="flex items-center justify-between duration-150 ease-linear hover:scale-[1.2] hover:text-sky-800">
									{item}
								</a>
							</li>
						);
					})}
				</ul>
			</div>
		</div>
	);
};

export default Nav;
