import React from "react";

function Content() {
	return (
		<div className="   px-6  xl:px-[10%] h-[60vh] py-[1%]    w-full flex flex-col justify-between">
			<Section1 />
			<Section2 />
		</div>
	);
}

const Section1 = () => {
	return (
		<div>
			<Nav />
		</div>
	);
};

const Section2 = () => {
	return (
		<div className="flex justify-between items-end text-secondary ">
			<h2>MQ</h2>
			<p>©copyright</p>
		</div>
	);
};

const Nav = () => {
	const handleScrollTo = (sectionId: string) => {
		const section = document.getElementById(sectionId);
		if (section) {
			section.scrollIntoView({ behavior: "smooth" });
		}
	};
	return (
		<div className="flex shrink-0 gap-20 text-secondary ">
			<div className="flex flex-col items-start gap-2 ">
				<h3 className="mb-2 uppercase text-secondary">
					Home
				</h3>
				<button className=" text-secondarytransition-all duration-100 ease-in">
					Projects
				</button>

				<button className=" text-secondarytransition-all duration-100 ease-in">
					Gallery
				</button>
			</div>
		</div>
	);
};
export default function Footer() {
	return (
		<div
			className="relative bottom-0 h-[60vh] backdrop-blur-md bg-white/40 text-black z-50"
			style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}>
			<div className="fixed bottom-0    w-full">
				<Content />
			</div>
		</div>
	);
}
