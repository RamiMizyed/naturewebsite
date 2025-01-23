import type { Metadata } from "next";
import {
	Croissant_One,
	Geist,
	Geist_Mono,
	Playfair_Display,
} from "next/font/google";
import "./globals.css";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import SmoothScroll from "@/lib/SmoothScroll";

const croissant = Croissant_One({
	subsets: ["latin"],
	weight: ["400"],
});
const playfair = Geist({
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Mountain Quest",
	description:
		"Discover the thrill of the great outdoors with Mountain Quest, your ultimate companion for mountain adventures. From serene hiking trails to challenging summit climbs, we provide guided tours and curated experiences for explorers of all levels. Unleash your adventurous spirit, immerse yourself in nature’s beauty, and conquer new heights. Your next quest begins here with Mountain Quest!",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${playfair.className} antialiased`}>
				<SmoothScroll>
					<NavBar />
					{children}
					<Footer />
				</SmoothScroll>
			</body>
		</html>
	);
}
