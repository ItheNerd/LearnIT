import { React, useState } from "react";
import {
	FaBars,
	FaGithub,
	FaInstagram,
	FaLinkedin,
	FaTimes,
	FaTwitter,
} from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import Logo from "../assets/images/logo.png";
function Nav() {
	const navList = [
		"Home",
		"Membership",
		"Events",
		"Projects",
		"Team",
		"Contact",
	];
	const icons = [
		<FaGithub key="" size={22} />,
		<FaInstagram key="" size={22} />,
		<FaLinkedin key="" size={22} />,
		<FaTwitter key="" size={22} />,
		<SiGmail key="" size={22} />,
	];
	const [nav, setNav] = useState(false);
	const handleClick = () => {
		setNav(!nav);
	};
	return (
		<nav className="flex w-screen items-center justify-between px-10 py-2 md:justify-around">
			<a href="" className="inline-flex items-center">
				<div className="">
					<a className="" href="#">
						<img src={Logo} className="w-[2rem] py-2" alt="Logo" />
					</a>
				</div>
				<span className="ml-2 text-xl font-bold tracking-wide text-gray-800">
					LearnIT
				</span>
			</a>
			<ul id="" className="hidden items-center md:flex">
				{navList.map((items, index) => {
					return (
						<li className="nav_btn" key={index}>
							{items}
						</li>
					);
				})}
			</ul>
			<div className="z-10 md:hidden" onClick={handleClick}>
				{!nav ? <FaBars size={23} /> : <FaTimes size={23} />}
			</div>
			<div className="hidden md:inline">
				<div className="member nav_btn">Join Us</div>
			</div>
			<div
				className={
					!nav
						? "hidden"
						: "absolute top-0 left-0 flex h-screen w-full flex-col items-center justify-center bg-slate-50"
				}>
				<ul>
					{navList.map((items, index) => {
						return (
							<li className="py-6 text-center text-3xl" key={index}>
								<div onClick={handleClick}>{items}</div>
							</li>
						);
					})}
				</ul>
			</div>
			<div className="fixed top-96 right-2 hidden flex-col md:flex">
				<ul className="before:absolute before:bottom-[100%] before:my-0 before:mx-10 before:block before:h-[50vh] before:w-[2px] before:bg-blue-400 before:content-[''] after:my-0 after:mx-10 after:block after:h-[50vh] after:w-[2px] after:bg-blue-400 after:content-['']">
					{icons.map((item, index) => {
						return (
							<li className="mx-3 my-6" key={index}>
								<a
									href="/"
									className="flex items-center justify-between duration-150 ease-linear hover:scale-[1.2] hover:animate-none hover:text-blue-400">
									{item}
								</a>
							</li>
						);
					})}
				</ul>
			</div>
		</nav>
	);
}

export default Nav;
