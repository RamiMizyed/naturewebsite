import { useEffect, useRef, useCallback } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { debounce } from "@/lib/debounce";
import ImageComponent from "./ImageComponent";
import { Croissant_One } from "next/font/google";
import { splitText } from "@/lib/splitText";
import { Syne } from "next/font/google";
import { SiInstagram } from "react-icons/si";
import { TiSocialTwitter } from "react-icons/ti";
const syne = Syne({ subsets: ["latin"] });
const croissant = Croissant_One({
	subsets: ["latin"],
	weight: ["400"],
});
gsap.registerPlugin(ScrollTrigger);

const images = [
	"/img/1.webp",
	"/img/2.jpg",
	"/img/3.jpg",
	"/img/4.jpg",
	"/img/5.jpg",
	"/img/6.jpg",
	"/img/7.jpg",
	"/img/8.jpg",
	"/img/9.jpg",
	"/img/10.jpg",
	"/img/11.jpg",
	"/img/12.jpg",
	"/img/13.jpg",
	"/img/14.jpg",
	"/img/15.jpg",
	"/img/16.jpg",
	"/img/17.jpg",
	"/img/18.jpg",
	"/img/19.jpg",
	"/img/20.jpg",
];

const GalleryPreviewFullGrid = () => {
	const gridRef = useRef<HTMLDivElement | null>(null);
	const headerTextRef = useRef<HTMLHeadingElement | null>(null);
	const secondHeaderTextRef = useRef<HTMLHeadingElement | null>(null);

	const animateHeaderText = useCallback(() => {
		if (headerTextRef.current && secondHeaderTextRef.current) {
			splitText(headerTextRef.current);
			splitText(secondHeaderTextRef.current);
			const chars = headerTextRef.current.querySelectorAll(".char");
			const secondChars = secondHeaderTextRef.current.querySelectorAll(".char");

			gsap
				.timeline({
					scrollTrigger: {
						trigger: headerTextRef.current,
						start: "top bottom",
						end: "center center-=5%",
						scrub: true,
					},
				})
				.fromTo(
					chars,
					{
						yPercent: 300,
						autoAlpha: 0,
						margin: "0px",
						color: "white",
					},
					{
						ease: "sine",
						padding: "0.25rem",
						color: "white",
						yPercent: 0,
						autoAlpha: 1,
						margin: "5px",
						stagger: {
							each: 0.04,
							from: "center",
						},
					}
				)
				.fromTo(
					secondChars,
					{
						yPercent: -300,
						autoAlpha: 0,
						margin: "0px",
						backgroundColor: "transparent",
					},
					{
						ease: "sine",
						backgroundColor: "#f97316 ",
						color: "transparent",
						WebkitBackgroundClip: "text",
						backgroundClip: "text",
						padding: "0.25rem",
						yPercent: 0,
						autoAlpha: 1,
						margin: "5px",
						stagger: {
							each: 0.04,
							from: "center",
						},
					}
				);
		}
	}, []);

	const animateScrollGrid = useCallback(() => {
		if (!gridRef.current) return;
		const gridImages = gridRef.current.querySelectorAll(".grid__item-imgwrap");
		const numOfColumns = getComputedStyle(
			gridRef.current
		).gridTemplateColumns.split(" ").length;
		const columns: HTMLElement[][] = Array.from(
			{ length: numOfColumns },
			() => []
		);
		const middleColIndex = Math.floor(numOfColumns / 2);
		gridImages.forEach((image, index) => {
			const columnIndex = index % numOfColumns;
			columns[columnIndex].push(image as HTMLElement);
		});

		columns.forEach((column, index) => {
			const delayFac = Math.abs(index - middleColIndex) * 0.25;
			gsap
				.timeline({
					scrollTrigger: {
						trigger: gridRef.current, // Trigger the animation when the full grid section comes into view
						start: "top bottom", // Start when the top of the grid hits the bottom of the viewport
						end: "center center", // End when the bottom of the grid hits the center of the viewport
						scrub: true, // Smooth scrub
					},
				})
				.from(column, {
					// Animate the column items into view
					yPercent: 450, // Start with items far below the viewport
					autoAlpha: 0, // Fade in from opacity 0
					delay: delayFac, // Delay based on distance from the center
					ease: "sine",
				})
				.from(
					column.map((item) => item.querySelector(".grid__item-img")),
					{
						// Apply rotation to the images inside each grid item
						transformOrigin: "50% 0%", // Set the transform origin for the 3D effect
						ease: "sine",
					},
					0
				); // Start the rotation at the same time as the translation
		});
	}, []);

	useEffect(() => {
		animateHeaderText();
		animateScrollGrid();
		const handleResize = debounce(() => {
			ScrollTrigger.refresh();
			animateHeaderText();
			animateScrollGrid();
		}, 300);

		window.addEventListener("resize", handleResize);

		ScrollTrigger.refresh();

		return () => {
			window.removeEventListener("resize", handleResize);
			ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
		};
	}, [animateScrollGrid]);

	return (
		<section
			className={`${syne.className} w-full flex flex-col items-center justify-start relative bg-black `}>
			<div
				ref={gridRef}
				className="grid grid-cols-3 md:grid-cols-5  gap-[1rem] w-full relative  mb-[10vh] overflow-hidden px-[5%] z-0">
				{images.map((src, index) => (
					<ImageComponent key={index} src={src} alt={`Image ${index + 1}`} />
				))}
			</div>
			<div className=" text-center items-center justify-center py-[20vh] w-full h-full flex flex-col gap-4">
				<h1
					className="flex uppercase text-white text-[3vw] select-none "
					ref={headerTextRef}>
					Mountain
				</h1>
				<h1
					className="flex uppercase text-white text-[3vw] select-none "
					ref={secondHeaderTextRef}>
					Quest
				</h1>
				<div className=" flex  left-0  z-50 bottom-[50%] justify-start items-center  gap-4">
					<p className="font-sans font-semibold text-sm select-none">
						Follow Us
					</p>
					<SiInstagram
						className="text-white hover:scale-105 transition-all cursor-pointer hover:text-orange-400 "
						size={20}
					/>
					<TiSocialTwitter
						className="text-white hover:scale-105 transition-all cursor-pointer hover:text-orange-400 "
						size={25}
					/>
				</div>
			</div>
		</section>
	);
};

export default GalleryPreviewFullGrid;
