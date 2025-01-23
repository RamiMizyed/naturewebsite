import React, { useEffect, useRef } from "react";
import Cta from "./Cta";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SectionWithImage = () => {
	const sectionRef = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		const section = sectionRef.current;
		if (!section) return;

		const elements = section.querySelectorAll(".animate");

		elements.forEach((el) => {
			gsap.fromTo(
				el,
				{ opacity: 0, y: 150 },
				{
					opacity: 1,
					y: 0,
					duration: 1,
					ease: "power4.out",
					scrollTrigger: {
						trigger: el,
						start: "top 80%",
						end: "bottom 60%",
						scrub: true,
					},
				}
			);
		});
	}, []);

	return (
		<div
			ref={sectionRef}
			className="w-full h-full px-6 lg:px-[5%] bg-black py-[20vh]">
			<div className="grid grid-cols-1 lg:grid-cols-3 gap-[10vh]">
				<div className="w-full flex flex-col gap-4 lg:col-span-2 p-6 top-0 animate">
					<h1 className="text-7xl text-orange-300">01</h1>
					<h2 className="uppercase">Section Title</h2>
					<p>Section Description</p>
					<p>
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus
						explicabo perferendis, laborum ratione amet consequatur odit
						repellendus accusamus impedit sit voluptatum tempora quidem adipisci
						maiores quisquam ex quaerat, officiis corrupti.
					</p>
					<Cta />
				</div>
				<div className="flex items-center justify-center animate">
					<Image
						src="/img/15.jpg"
						alt=""
						width={500}
						height={500}
						className="w-full h-full object-cover rounded-xl"
					/>
				</div>
			</div>
			<div className="grid grid-cols-1 lg:grid-cols-3 mt-[20vh] gap-[10vh]">
				<div className="w-full animate">
					<Image
						src="/img/pexels-roberto-nickson-2559941.jpg"
						alt=""
						width={500}
						height={500}
						className="w-full h-full object-cover rounded-xl"
					/>
				</div>
				<div className="flex flex-col gap-4 items-start justify-center lg:col-span-2 animate">
					<h1 className="text-7xl text-orange-300">02</h1>
					<h2 className="uppercase">Section Title</h2>
					<p>Section Description</p>
					<p>
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus
						explicabo perferendis, laborum ratione amet consequatur odit
						repellendus accusamus impedit sit voluptatum tempora quidem adipisci
						maiores quisquam ex quaerat, officiis corrupti.
					</p>
					<Cta />
				</div>
			</div>
		</div>
	);
};

export default SectionWithImage;
