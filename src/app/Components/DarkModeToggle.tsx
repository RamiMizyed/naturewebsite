"use client";
import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { MdDarkMode, MdLightMode } from "react-icons/md";
const DarkModeToggle = () => {
	const { theme, setTheme } = useTheme();
	const [isDarkMode, setIsDarkMode] = useState(theme === "dark");

	// Update isDarkMode state whenever theme changes
	useEffect(() => {
		setIsDarkMode(theme === "dark");
	}, [theme]);

	const toggleTheme = () => {
		setTheme(isDarkMode ? "light" : "dark");
		setIsDarkMode(!isDarkMode);
	};

	return (
		<div className="cursor-pointer w-fit  ">
			<div
				onClick={toggleTheme}
				className=" bg-white  dark:hover:bg-primary bg-black hover:bg-primary w-6 h-6 rounded-full flex items-center justify-center relative  ">
				<MdLightMode className="text-white dark:opacity-0 absolute " />
				<MdDarkMode className="text-black absolute opacity-0 dark:opacity-100 " />
			</div>
		</div>
	);
};

export default DarkModeToggle;
