import { useEffect, useRef, useCallback } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { debounce } from "@/lib/debounce";
import ImageComponent from "./ImageComponent";
import { Croissant_One } from "next/font/google";
import { splitText } from "@/lib/splitText";
import Cta from "./Cta";

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
];

const GalleryPreview = () => {
	const gridRef = useRef<HTMLDivElement | null>(null);
	const scrolledTextRef = useRef<HTMLDivElement | null>(null);
	const headerTextRef = useRef<HTMLHeadingElement | null>(null);

	const isLeftSide = (element: HTMLElement) => {
		const elementCenter =
			element.getBoundingClientRect().left + element.offsetWidth / 2;
		const viewportCenter = window.innerWidth / 2;
		return elementCenter < viewportCenter;
	};
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
				{ y: -150, x: (index) => index * 80 - (chars.length * 80) / 2 },
				{
					ease: "sine",
					y: 0,
					x: 0,
					marginRight: "10px",
					stagger: {
						each: 0.04,
						from: "center",
					},
				}
			);
	}, []);
	// const animateTextScroller = useCallback(() => {
	// 	if (!scrolledTextRef.current) return;

	// 	const chars = scrolledTextRef.current.querySelectorAll(
	// 		".mark > .mark__inner"
	// 	);
	// 	gsap
	// 		.timeline({
	// 			scrollTrigger: {
	// 				trigger: gridRef.current,
	// 				start: "top top",
	// 				end: "bottom 60%",
	// 				scrub: true,
	// 			},
	// 		})
	// 		.fromTo(chars, { x: "110vw" }, { x: "-160%", ease: "sine" });
	// }, []);

	const animateScrollGrid = useCallback(() => {
		if (!gridRef.current) return;

		const gridImages = gridRef.current.querySelectorAll(".grid__item-imgwrap");
		gridImages.forEach((imageWrap) => {
			const imgEl = imageWrap.querySelector(".grid__item-img") as HTMLElement;
			const leftSide = isLeftSide(imageWrap as HTMLElement);
			gsap
				.timeline({
					scrollTrigger: {
						trigger: imageWrap,
						start: "top bottom+=10%",
						end: "bottom top-=25%",
						scrub: true,
					},
				})
				.from(imageWrap, {
					startAt: {
						filter: "blur(0px) brightness(100%) contrast(100%)",
					},
					z: 300,
					rotateX: 70,
					rotateZ: leftSide ? 5 : -5,
					xPercent: leftSide ? -20 : 20,
					skewX: leftSide ? -20 : 20,
					yPercent: 100,
					filter: "blur(7px) brightness(0%) contrast(400%)",
					ease: "sine",
				})
				.to(imageWrap, {
					z: 300,
					rotateX: -50,
					rotateZ: leftSide ? -1 : 1,
					xPercent: leftSide ? -10 : 10,
					skewX: leftSide ? 10 : -10,
					filter: "blur(4px) brightness(0%) contrast(500%)",
					ease: "sine.in",
				})
				.fromTo(imgEl, { scaleY: 1.9 }, { scaleY: 1.9, ease: "sine.in" }, 0);
		});
	}, []);

	useEffect(() => {
		const handleResize = debounce(() => {
			ScrollTrigger.refresh();
		}, 300);

		window.addEventListener("resize", handleResize);

		if (gridRef.current) {
			animateScrollGrid();
			// animateTextScroller();
			animateHeaderText();
		}

		ScrollTrigger.refresh();

		return () => {
			window.removeEventListener("resize", handleResize);
			ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
		};
	}, [animateScrollGrid]);

	return (
		<section
			className={`$ w-full flex flex-col items-center justify-start  relative bg-black/80 `}>
			{/* <div
				ref={scrolledTextRef}
				className="mark w-full h-[5rem]  z-10  fixed top-[calc(50%-5rem)] overflow-hidden flex items-center justify-center">
				<div className="mark__inner flex gap-[6rem] w-max relative translate-x-[100vw] will-change-transform font-alt ">
					{[
						"Summit Adventure",
						"Peak Wanderer",
						"Trail Blazer",
						"Highland Explorer",
					].map((name, idx) => (
						<span
							key={idx}
							className="whitespace-nowrap uppercase text-3xl leading-4">
							{name}
						</span>
					))}
				</div>
			</div> */}

			<div
				ref={gridRef}
				className="grid grid-cols-2 gap-[1rem]  w-full max-w-xl relative mt-[20vh] mb-[10vh] p-6 z-0">
				{images.map((src, index) => (
					<ImageComponent key={index} src={src} alt={`Image ${index + 1}`} />
				))}
			</div>
			<div className="mt-[20vh] mb-[10vh]  flex flex-col items-center justify-center gap-10">
				<h1 className="flex uppercase " ref={headerTextRef}>
					Contact Us
				</h1>
				<Cta />
			</div>
		</section>
	);
};

export default GalleryPreview;
