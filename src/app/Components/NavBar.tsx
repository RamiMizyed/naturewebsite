"use client";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { AnimatePresence } from "framer-motion";
import HamburgerMenu from "./HamburgerMenu";

const NavBar = () => {
	const [scrollYVal, setScrollYVal] = useState(0);
	const [isScrollingDown, setIsScrollingDown] = useState(false);
	const [isOpen, setisOpen] = useState(false);
	const hamburgerRef = useRef<HTMLDivElement>(null);

	const handleScroll = () => {
		const currentScrollY = window.scrollY;

		// Check if the user is scrolling down or up
		if (currentScrollY > scrollYVal) {
			setIsScrollingDown(true);
		} else if (currentScrollY < scrollYVal) {
			setIsScrollingDown(false);
		}
		setScrollYVal(currentScrollY);
	};

	useEffect(() => {
		// Attach the scroll event listener
		window.addEventListener("scroll", handleScroll);

		// Cleanup the event listener when the component unmounts
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, [scrollYVal]);

	return (
		<div
			className={`w-full z-[999] p-6 lg:px-[5%] fixed top-0 flex items-center justify-between transition-all duration-300 
  			 ${isScrollingDown ? "opacity-0" : "opacity-100 "}`}>
			<Link className="" href={"/"}>
				<h5 className="uppercase text-sm font-semibold">Mountain Quest</h5>
			</Link>
			<ul className="hidden md:flex gap-3 uppercase text-sm">
				<a href="/">About</a>
				{"."}
				<a href="/">Gallery</a>
				{"."}
				<a href="/">Contact</a>
			</ul>
			<div
				ref={hamburgerRef}
				className=" flex items-center  justify-center gap-6 ">
				<HamburgerMenu isOpen={isOpen} setIsOpen={setisOpen} />
			</div>

			<AnimatePresence>
				{isOpen && <div className="absolute"></div>}
			</AnimatePresence>
		</div>
	);
};

export default React.memo(NavBar);
