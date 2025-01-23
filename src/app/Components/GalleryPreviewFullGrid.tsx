import { useEffect, useRef, useCallback } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { debounce } from "@/lib/debounce";
import ImageComponent from "./ImageComponent";
import { Croissant_One } from "next/font/google";
import { splitText } from "@/lib/splitText";

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
	const animateHeaderText = useCallback(() => {
		if (!headerTextRef.current) return;

		splitText(headerTextRef.current);
		const chars = headerTextRef.current.querySelectorAll(".char");

		gsap
			.timeline({
				scrollTrigger: {
					trigger: headerTextRef.current,
					start: "top bottom",
					end: "center center-=25%",
					scrub: true,
				},
			})
			.fromTo(
				chars,
				{ yPercent: 300, autoAlpha: 0, marginRight: "0px" },
				{
					ease: "sine",
					yPercent: 0,
					autoAlpha: 10,
					marginRight: "5px",
					stagger: {
						each: 0.04,
						from: "center",
					},
				}
			);
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
		const handleResize = debounce(() => {
			ScrollTrigger.refresh();
		}, 300);

		window.addEventListener("resize", handleResize);

		animateScrollGrid();
		animateHeaderText();

		ScrollTrigger.refresh();

		return () => {
			window.removeEventListener("resize", handleResize);
			ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
		};
	}, [animateScrollGrid]);

	return (
		<section
			className={`${croissant.className} w-full flex flex-col items-center justify-start relative bg-black`}>
			<h1
				className="flex uppercase mt-[20vh] text-sm md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-6xl text-white"
				ref={headerTextRef}>
				Mountain Quest
			</h1>
			<div
				ref={gridRef}
				className="grid grid-cols-3 md:grid-cols-5 mt-[10vh] gap-[1rem] w-full relative  mb-[20vh] overflow-hidden px-[5%] z-0">
				{images.map((src, index) => (
					<ImageComponent key={index} src={src} alt={`Image ${index + 1}`} />
				))}
			</div>
		</section>
	);
};

export default GalleryPreviewFullGrid;
