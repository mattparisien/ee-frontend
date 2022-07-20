import { useMemo, useState } from "react";
import MediaTransition from "./MediaTransition";

function MyImage({
	src,
	alt,
	width,
	height,
	objectFit,
	layout,
	ratio,
	grayscale,
	lazyLoad,
}) {
	const ratios = {
		portrait: 1.25,
		landscape: 0.5625,
		square: 1,
	};

	const [loaded, setLoaded] = useState(false);

	const smallSrc = useMemo(() => {
		const qualityString = "w_200,c_scale/";

		if (src && src.includes("cloudinary")) {
			const partLeft = src.substring(
				0,
				src.indexOf("/upload/") + "/upload".length + 1
			);
			const partRight = src.substring(partLeft.length, src.length);
			const newUrl = partLeft + qualityString + partRight;
			console.log(newUrl);
			return newUrl;
		}
		return smallSrc;
	}, [src]);

	const largeSrc = useMemo(() => {

		const qualityString = "q_40/";

		if (src && src.includes("cloudinary")) {
			const partLeft = src.substring(
				0,
				src.indexOf("/upload/") + "/upload".length + 1
			);
			const partRight = src.substring(partLeft.length, src.length);
			const newUrl = partLeft + qualityString + partRight;
			console.log(newUrl);
			return newUrl;
		}
		return smallSrc;
	}, [src])

	return (
		<div className={"Image w-full h-full relative"}>
			<HighResImage
				className={`${
					grayscale ? "HighResImage grayscale block" : "HighResImage block"
				}`}
				src={largeSrc}
				alt={alt}
				setLoaded={setLoaded}
				style={{
					width: width,
					height: height || width * ratios[ratio],
					objectFit: objectFit,
				}}
			/>
		{<LowResImage
				className={`${
					grayscale
						? `LowResImage grayscale block absolute top-0 left-0 ${loaded ? 'opacity-0' : 'opacity-1'}`
						: `LowResImage block absolute top-0 left-0 ${loaded ? 'opacity-0' : 'opacity-1'}`
				}`}
				src={smallSrc}
				alt={alt}
				style={{
					width: width,
					height: height || width * ratios[ratio],
					objectFit: objectFit,
				}}
			/>}
			{/* <img
				className={`${grayscale ? "grayscale block" : "block"}`}
				src={src}
				alt={alt}
				style={{
					width: width,
					height: height || width * ratios[ratio],
					objectFit: objectFit,
				}}
			/> */}
			{/* <img /> */}
			{/* <Image
				src={src}
				alt={alt}
				width={width}
				height={height || width * ratios[ratio]}
				objectFit={objectFit}
				layout={layout}
				className={`${grayscale ? "grayscale block" : "block"}`}
				display='block'
				priority={true}
				lazyBoundary='1000px'
				quality={60}
			/> */}
			<MediaTransition />
			{/* <Overlay /> */}
		</div>
	);
}

const LowResImage = props => {
	return <img {...props} />;
};

const HighResImage = props => {
	return <img {...props} onLoad={props.setLoaded(true)} />;
};

export default MyImage;
