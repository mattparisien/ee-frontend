import { useEffect, useMemo, useState } from "react";
import useInView from "../../helpers/hooks/useInView";
import MediaTransition from "./MediaTransition";
import Overlay from "./Overlay";
import Image from "next/image";
import classNames from "classnames";
import buildUrl from "cloudinary-build-url";
import Frame from "../Frame/Frame";

function MyImage({
	cloudinaryId,
	src,
	alt,
	width,
	height,
	objectFit,
	ratio,
	grayscale,
}) {
	const ratios = {
		portrait: 1.25,
		landscape: 0.5625,
		square: 1,
	};

	const { ref, inView } = useInView({
		threshold: 0,
	});

	const url = buildUrl(cloudinaryId || "", {
		cloud: {
			cloudName: "eyes-ears",
		},
	});
	const blurredUrl = buildUrl(cloudinaryId || "", {
		cloud: {
			cloudName: "eyes-ears",
		},
		transformations: {
			rawTransformation: "q_7,f_auto",
		},
	});

	const [loaded, setLoaded] = useState(false);

	const customImgClasses = classNames("", {
		grayscale: grayscale,
	});

	return (
		<div className={"Image w-full h-full relative overflow-hidden"} ref={ref}>
			<Image
				src={url}
				alt={alt}
				layout={"fill"}
				objectFit='cover'
				className={customImgClasses}
				lazyBoundary='1000px'
				unoptimized={true}
				placeholder='blur'
				blurDataURL={blurredUrl}
			/>
			<MediaTransition />
			{/* <Overlay /> */}
		</div>
	);
}

export default MyImage;
