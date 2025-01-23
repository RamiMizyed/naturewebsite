import React from "react";
import { SiInstagram } from "react-icons/si";
import { TiSocialTwitter } from "react-icons/ti";
import { Playfair_Display } from "next/font/google";
import Cta from "./Cta";
const playfair = Playfair_Display({
	subsets: ["latin"],
});

const LandingSection = () => {
	return (
		<div className="w-full  h-[100svh] min-h-[550px] relative">
			<div className="w-full h-full absolute inset-0 bg-gradient-to-b from-black via-black/50 to-black/30 -z-10"></div>
			<div className="fixed pointer-events-none inset-0 flex items-center justify-center bg-black  [mask-image:radial-gradient(ellipse_at_center,transparent_40%,black)] w-full h-full z-20"></div>
			<video
				autoPlay
				muted
				src="/4763869-hd_1366_720_24fps (online-video-cutter.com) (1).mp4"
				className="w-full h-full object-cover blur-sm fixed inset-0 -z-20"
			/>
			<div className="w-full h-full flex flex-col items-center justify-center gap-10 z-[999]">
				<h1
					className={`${playfair.className} uppercase  text-center select-none`}>
					Conquer the Mountains <br /> and{" "}
					<span className="highlight">Beyond!</span>
				</h1>

				<Cta />
			</div>
			<div className="hidden lg:flex absolute left-0  z-50 bottom-[50%] justify-start items-center rotate-90 gap-4">
				<p className="font-sans font-semibold text-sm select-none">Follow Us</p>
				<SiInstagram
					className="text-white hover:scale-105 transition-all cursor-pointer hover:text-orange-400 "
					size={20}
				/>
				<TiSocialTwitter
					className="text-white -rotate-90 hover:scale-105 transition-all cursor-pointer hover:text-orange-400 "
					size={25}
				/>
			</div>
		</div>
	);
};

export default LandingSection;
