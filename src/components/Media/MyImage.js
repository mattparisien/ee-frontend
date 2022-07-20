import { useMemo } from "react";
import Image from "next/image";
import MediaTransition from "./MediaTransition";
import Overlay from "./Overlay";

function MyImage({
	src,
	alt,
	width,
	height,
	objectFit,
	layout,
	ratio,
	grayscale,
}) {
	const ratios = {
		portrait: 1.25,
		landscape: 0.5625,
		square: 1,
	};

	// const smallSrc = useMemo(() => {
	// 	const qualityString = "w_200,c_scale/";

	// 	if (src && src.includes("cloudinary")) {
	// 		const partLeft = src.substring(
	// 			0,
	// 			src.indexOf("/upload/") + "/upload".length + 1
	// 		);
	// 		const partRight = src.substring(partLeft.length, src.length);
	// 		const newUrl = partLeft + qualityString + partRight;
	// 		return newUrl;
	// 	}
	// 	return smallSrc;
	// }, [src]);

	return (
		<div className={"Image w-full h-full relative"}>
			<Image
				src={src}
				alt={alt}
				width={width}
				height={height || width * ratios[ratio]}
				objectFit={objectFit}
				layout={layout}
				className={`${grayscale ? "grayscale block" : "block"}`}
				display='block'
				priority={false}
			/>
			{/* <MediaTransition /> */}
			{/* <Overlay /> */}
		</div>
	);
}

export default MyImage;
