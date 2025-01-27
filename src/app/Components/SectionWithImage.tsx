import React, { useEffect, useRef } from "react";
import Cta from "./Cta";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SectionWithImage = () => {
	const sectionRef = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		if (!sectionRef.current) return;
		const textLines = sectionRef.current.querySelectorAll(".line");

		const timeline = gsap.timeline({
			scrollTrigger: {
				trigger: sectionRef.current,
				start: "top bottom",
				end: "center center-=25%",
				scrub: 1,
			},
		});
		timeline.fromTo(
			textLines,
			{ x: -300, opacity: 0 },
			{
				x: 0,
				opacity: 1,
				stagger: 0.5,
				duration: 1.5,
				ease: "power2.out",
				background: "transparent",
			}
		);
	}, []);

	return (
		<div
			ref={sectionRef}
			className="w-full grid grid-cols-1 lg:grid-cols-3 h-full bg-black px-6 lg:px-[5%]">
			<div className="flex flex-col gap-4 col-span-1 justify-center lg:col-span-2">
				<div className="flex items-center gap-4">
					<h1 className="text-7xl text-orange-300 line ">01</h1>
					<h2 className="uppercase line">Section Title</h2>
				</div>
				<p className="line">Section Description</p>
				<p className="line max-w-4xl">
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus
					explicabo perferendis, laborum ratione amet consequatur odit
					repellendus accusamus impedit sit voluptatum tempora quidem adipisci
					maiores quisquam ex quaerat, officiis corrupti.
				</p>
				<Cta />
			</div>
			<div className=" ">
				<Image
					className=" "
					src="/img/pexels-photo-1670187.jpg"
					alt="Section Image"
					width={1920}
					height={1080}
				/>
			</div>
		</div>
	);
};

export default SectionWithImage;
