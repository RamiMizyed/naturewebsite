"use client";
import LandingSection from "./Components/LandingSection";
import GalleryPreviewFullGrid from "./Components/GalleryPreviewFullGrid";
import ExpandImageEffect from "./Components/ExpandImageEffect";
const sections = [
	{
		index: 1,
		title: "Discover the",
		secondTitle: "beauty of nature",
		description:
			"Join us for an unforgettable journey as we guide you through the most stunning mountain trails. Whether you're an experienced climber or a novice, we have the ideal tour for you.",
		imageSrc: "/4763786-hd_1366_720_24fps.mp4",
	},
	{
		index: 2,
		title: "Challenge your",
		secondTitle: "limits and explore",
		description:
			"Join us for an exhilarating adventure as we lead you through the most awe-inspiring mountain paths. Whether you're a veteran climber or a beginner, we have the perfect tour for you.",
		imageSrc: "/4763032-hd_1366_720_24fps.mp4",
		reverse: true,
	},
	{
		index: 3,
		title: "Explore hidden",
		secondTitle: "gems and trails",
		description:
			"Our expert guides will take you off the beaten path to discover hidden gems and serene landscapes that few have witnessed. Experience the wonders of nature like never before.",
		imageSrc: "/4763828-sd_506_960_24fps.mp4",
	},
	{
		index: 4,
		title: "Embark on a",
		secondTitle: "thrilling journey",
		description:
			"Experience the excitement of adventure as you embark on a thrilling journey through the mountains. Our tours are crafted to challenge and inspire you.",
		imageSrc: "/4763824-hd_1920_1080_24fps.mp4",
		reverse: true,
	},
];
export default function Home() {
	return (
		<div className="w-full h-full  ">
			<LandingSection />
			<div className="flex flex-col gap-[20vh] bg-black py-[20vh]">
				{sections.map((section) => (
					<ExpandImageEffect
						key={section.index}
						index={section.index}
						title={section.title}
						secondTitle={section.secondTitle}
						description={section.description}
						imageSrc={section.imageSrc}
						reverse={section.reverse}
					/>
				))}
				<GalleryPreviewFullGrid />
			</div>
			{/* <GalleryPreview /> */}
		</div>
	);
}
