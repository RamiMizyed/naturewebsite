import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const StarRating = () => {
	const containerRef = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		const container = containerRef.current;

		if (!container) return;

		gsap.fromTo(
			container,
			{ y: 100, opacity: 0 },
			{
				y: 0,
				delay: 1,
				opacity: 1,

				duration: 1,
				ease: "power4.out",
			}
		);
	}, []);

	return (
		<div
			ref={containerRef}
			className="text-white px-6 py-4 rounded-lg shadow-lg max-w-sm bg-gray-900 flex items-center space-x-4 absolute bottom-4 right-4 opacity-70 hover:opacity-100 transition-opacity z-50">
			{/* Google Logo */}
			<svg className="w-12" viewBox="0 0 125 126" fill="none">
				<path
					d="M117.5 64.3021C117.5 60.2396 117.135 56.3334 116.458 52.5834H62.5V74.7709H93.3333C91.9792 81.9063 87.9167 87.948 81.8229 92.0105V106.438H100.417C111.25 96.4375 117.5 81.75 117.5 64.3021Z"
					fill="#4285F4"
				/>
				<path
					d="M62.5001 120.292C77.9688 120.292 90.9376 115.188 100.417 106.438L81.823 92.0104C76.7188 95.4479 70.2084 97.5312 62.5001 97.5312C47.6042 97.5312 34.948 87.4792 30.4167 73.9375H11.3542V88.7292C20.7813 107.427 40.1042 120.292 62.5001 120.292Z"
					fill="#34A853"
				/>
				<path
					d="M30.4166 73.8854C29.2708 70.4479 28.5937 66.802 28.5937 63C28.5937 59.1979 29.2708 55.552 30.4166 52.1145V37.3229H11.3541C7.44784 45.0312 5.20825 53.7291 5.20825 63C5.20825 72.2708 7.44784 80.9687 11.3541 88.677L26.1978 77.1145L30.4166 73.8854Z"
					fill="#FBBC05"
				/>
				<path
					d="M62.5001 28.5209C70.9376 28.5209 78.4376 31.4375 84.4272 37.0625L100.833 20.6563C90.8855 11.3855 77.9688 5.70837 62.5001 5.70837C40.1042 5.70837 20.7813 18.573 11.3542 37.323L30.4167 52.1146C34.948 38.573 47.6042 28.5209 62.5001 28.5209Z"
					fill="#EA4335"
				/>
			</svg>

			{/* Rating Text & Stars */}
			<div>
				<p className="text-gray-300 text-sm">Google Rating</p>
				<div className="flex items-center space-x-2">
					<span className="text-4xl font-bold text-white">4.8</span>
					<div className="flex space-x-1">
						{[...Array(5)].map((_, index) => (
							<svg
								key={index}
								className="w-6 h-6 text-yellow-400"
								fill="currentColor"
								viewBox="0 0 24 24">
								<path d="M12 2c.32 0 .64.15.83.45l2.52 4.93 5.45.79c.91.13 1.27 1.25.61 1.89l-3.95 3.85.93 5.44c.15.9-.79 1.58-1.6 1.16L12 18.8l-4.88 2.56c-.81.42-1.75-.26-1.6-1.16l.93-5.44L2.5 10.06c-.66-.64-.3-1.76.61-1.89l5.45-.79 2.52-4.93A1 1 0 0 1 12 2z" />
							</svg>
						))}
					</div>
				</div>
				<p className="text-sm text-gray-400 underline cursor-pointer">
					See all our reviews
				</p>
			</div>
		</div>
	);
};

export default StarRating;
