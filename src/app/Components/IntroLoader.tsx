import { motion } from "framer-motion";
import { useState } from "react";

const IntroLoader = () => {
	const [isInView, setIsInView] = useState(true);

	const containerVariants = {
		visible: { opacity: 1, y: 0 }, // Start fully visible
		hidden: {
			y: "-100%", // No vertical movement for the parent
			transition: {
				duration: 0.15,
				ease: "easeIn",
				staggerChildren: 0.15, // Stagger child animations
				when: "afterChildren", // Start child animations first
			},
		},
		exit: {
			y: "-100%", // Fade out the parent container
			transition: {
				duration: 0.5,
				ease: "easeInOut",
				when: "afterChildren", // Wait for children to finish
			},
		},
	};

	const divVariants = {
		visible: { y: "0%", opacity: 1 }, // Start in place
		hidden: {
			opacity: 0,
			y: "-100%", // Move upwards
			transition: {
				duration: 0.5,
				ease: "easeInOut",
			},
		},
		exit: {
			y: "-100%", // Ensure it stays upwards during exit
			opacity: 0, // Optional fade-out for individual divs
			transition: {
				duration: 0.5,
				ease: "easeInOut",
			},
		},
	};
	const divVariants2 = {
		visible: { y: "0%", opacity: 1, colspan: 2 }, // Start in place
		hidden: {
			colspan: 4,
			transition: {
				duration: 0.5,
				ease: "easeInOut",
			},
		},
		exit: {
			y: "-100%", // Ensure it stays upwards during exit
			opacity: 0, // Optional fade-out for individual divs
			transition: {
				duration: 0.5,
				ease: "easeInOut",
			},
		},
	};
	const divVariants3 = {
		visible: { y: "0%", opacity: 1 }, // Start in place
		hidden: {
			y: "-100%", // Move upwards
			transition: {
				duration: 0.5,
				ease: "easeInOut",
			},
		},
		exit: {
			y: "-100%", // Ensure it stays upwards during exit
			opacity: 0, // Optional fade-out for individual divs
			transition: {
				duration: 0.5,
				ease: "easeInOut",
			},
		},
	};

	// if (!isInView) {
	// 	return null;
	// }

	return (
		<motion.div
			variants={containerVariants}
			className="w-full h-[100svh] grid grid-cols-4 gap-1 z-[9999] fixed top-0 left-0"
			initial="visible"
			animate="hidden"
			exit="exit"
			onAnimationComplete={() => setIsInView(false)} // Trigger removal after animations
		>
			<motion.div
				variants={divVariants}
				className="w-full h-full backdrop-blur-xl border border-zinc-950 bg-teal-950/80 flex items-center justify-center">
				<h1>MQ</h1>
			</motion.div>
			<motion.div
				variants={divVariants2}
				className="w-full h-full col-span-2 backdrop-blur-xl border border-zinc-950 bg-black/80 flex items-center justify-center">
				<h1>MQ</h1>
			</motion.div>
			<motion.div
				variants={divVariants3}
				className="w-full h-full backdrop-blur-xl border border-zinc-950 bg-teal-950/80 flex items-center justify-center">
				<h1>MQ</h1>
			</motion.div>
		</motion.div>
	);
};

export default IntroLoader;
