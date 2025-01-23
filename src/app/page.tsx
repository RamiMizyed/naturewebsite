"use client";
import LandingSection from "./Components/LandingSection";
import About from "./Components/About";
import GalleryPreview from "./Components/GalleryPreview";
import GalleryPreviewFullGrid from "./Components/GalleryPreviewFullGrid";
import SectionWithImage from "./Components/SectionWithImage";

export default function Home() {
	return (
		<div className="w-full h-full overflow-hidden">
			<LandingSection />
			<GalleryPreviewFullGrid />
			<SectionWithImage />
			<GalleryPreview />
		</div>
	);
}
