"use client";

import { useEffect, ReactNode } from "react";
import Lenis from "lenis";

interface SmoothScrollProps {
	children: ReactNode;
}

export default function SmoothScroll({ children }: SmoothScrollProps) {
	useEffect(() => {
		// Initialize Lenis instance
		const lenis = new Lenis({
			duration: 1.2, // Adjust duration for smoothness
			easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Custom easing function
		});

		// Request animation frame loop to keep Lenis running
		const raf = (time: number) => {
			lenis.raf(time);
			requestAnimationFrame(raf);
		};
		requestAnimationFrame(raf);

		// Clean up on component unmount
		return () => {
			lenis.destroy();
		};
	}, []);

	return <>{children}</>;
}
