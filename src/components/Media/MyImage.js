import classNames from "classnames";
import MediaTransition from "./MediaTransition";
import Image from "next/image";

function MyImage({ src, alt, grayscale }) {
	const ratios = {
		portrait: 1.25,
		landscape: 0.5625,
		square: 1,
	};

	const customImgClasses = classNames("", {
		'grayscale': grayscale,
	});

	return (
		<div className={"Image w-full h-full relative overflow-hidde"}>
			<Image src={src} layout='fill' classes={customImgClasses} objectFit="cover"/>
			<MediaTransition />
			{/* <Overlay /> */}
		</div>
	);
}

export default MyImage;
