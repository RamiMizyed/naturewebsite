import Image from "next/image";
import React from "react";
interface ImageComponentProps {
	src: string;
	alt: string;
}
const ImageComponent: React.FC<ImageComponentProps> = ({ src, alt }) => {
	return (
		<figure className="grid__item relative z-[1] will-change-transform opacity-100">
			<div
				className="grid__item-imgwrap relative overflow-hidden will-change-filter"
				style={{
					height: "100%",
					width: "100%",
					aspectRatio: "1",
					borderRadius: "4px",
					transformStyle: "preserve-3d",
				}}>
				<Image
					className="grid__item-img w-full h-full object-cover"
					src={src}
					width={1200}
					height={1200}
					alt={alt}
					style={{
						backfaceVisibility: "hidden",
					}}
				/>
			</div>
		</figure>
	);
};

export default ImageComponent;
