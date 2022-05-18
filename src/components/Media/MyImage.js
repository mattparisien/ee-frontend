import Image from "next/image";

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

	return (
		<div
			className={`Image w-full h-full relative ${grayscale ? "grayscale" : ""}`}
		>
			<Image
				src={src}
				alt={alt}
				width={width}
				height={height || width * ratios[ratio]}
				objectFit={objectFit}
				layout={layout}
				loading='lazy'
			/>
		</div>
	);
}

export default MyImage;
