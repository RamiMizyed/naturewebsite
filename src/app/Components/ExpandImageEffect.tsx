"use client";
import React, { useRef, useEffect } from "react";
import Image from "next/image";
import Cta from "./Cta";
import useIsMobile from "@/lib/useIsMobile";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Syne } from "next/font/google";
const syne = Syne({ subsets: ["latin"] });

gsap.registerPlugin(ScrollTrigger);

interface SectionBlockProps {
	index: number;
	title: string;
	secondTitle: string;
	description: string;
	imageSrc: string;
	reverse?: boolean;
}

const SectionBlock: React.FC<SectionBlockProps> = ({
	index,
	title,
	secondTitle,
	description,
	imageSrc,
	reverse,
}) => {
	const textRef = useRef<HTMLDivElement | null>(null);
	const videoRef = useRef<HTMLVideoElement | null>(null);
	const isMobile = useIsMobile();
	useEffect(() => {
		const text = textRef.current;
		const video = videoRef.current;
		console.log(isMobile);
		if (!text || !video) return;

		gsap.fromTo(
			text.children,
			{ opacity: 0, y: 50 },
			{
				opacity: 1,
				y: 0,
				stagger: 0.2,
				duration: 1,
				ease: "power4.out",
				scrollTrigger: {
					trigger: text,
					start: "top 80%",
					end: "bottom 60%",
					scrub: true,
				},
			}
		);

		gsap.fromTo(
			video,
			{ clipPath: "inset(100% 0 0 0)" },
			{
				clipPath: "inset(0% 0 0 0)",
				duration: 1.5,
				delay: 0.25,
				ease: "power4.out",
				scrollTrigger: {
					trigger: text,
					start: "top 80%",
					end: "bottom 0%",
					scrub: false,
					onEnter: () => video.play(),
					onLeave: () => video.pause(),
					onEnterBack: () => video.play(),
					onLeaveBack: () => video.pause(),
				},
			}
		);
	}, [isMobile]);

	return (
		<div
			className={`${
				syne.className
			} w-full h-full flex flex-col lg:flex-row  gap-[6rem] px-6 lg:px-[5%] items-start justify-start bg-black overflow-clip ${
				reverse ? "lg:flex-row-reverse" : ""
			}`}>
			<div
				ref={textRef}
				className={`${
					reverse
						? "text-center lg:text-start items-center lg:items-start"
						: "text-start items-start"
				} w-full flex flex-col gap-3 lg:col-span-3 sticky top-20 z-50 p-3`}>
				<h4 className="text-orange-400">0{index}</h4>
				<h1>
					{title} <br />
					<span
						className={`${
							reverse
								? "from-emerald-500 to-orange-500"
								: "from-red-500 to-orange-500"
						} bg-gradient-to-r  px-2`}>
						{secondTitle}
					</span>
				</h1>
				<p className="mb-6 max-w-3xl ">{description}</p>
				<Cta />
			</div>
			<div className=" w-full rounded-md object-cover z-10 saturate-0 opacity-30 lg:opacity-100 lg:saturate-100">
				<video
					className="w-full h-full"
					ref={videoRef}
					src={imageSrc}
					muted
					autoPlay
				/>
			</div>
		</div>
	);
};

export default SectionBlock;
