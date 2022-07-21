import { useMemo, useState } from "react";
import useInView from "../../helpers/hooks/useInView";
import MediaTransition from "./MediaTransition";
import Overlay from "./Overlay";

function MyImage({ src, alt, width, height, objectFit, ratio, grayscale }) {
	const ratios = {
		portrait: 1.25,
		landscape: 0.5625,
		square: 1,
	};

	const { ref, inView } = useInView({
		threshold: 0,
	});

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
			return newUrl;
		}
		return smallSrc;
	}, [src]);

	return (
		<div className={"Image w-full h-full relative overflow-hidden"} ref={ref}>
			{inView && (
				<HighResImage
					className={`${
						grayscale ? "HighResImage grayscale block" : "HighResImage block"
					}`}
					setLoaded={setLoaded}
					src={largeSrc}
					alt={alt}
					style={{
						width: width,
						height: height || width * ratios[ratio],
						objectFit: objectFit,
					}}
				/>
			)}
			{
				<LowResImage
					className={`${
						grayscale
							? `LowResImage grayscale block absolute top-0 left-0 ${
									loaded ? "opacity-0" : "opacity-1"
							  }`
							: `LowResImage block absolute top-0 left-0 ${
									loaded ? "opacity-0" : "opacity-1"
							  }`
					}`}
					src={smallSrc}
					alt={alt}
					style={{
						width: width,
						height: height || width * ratios[ratio],
						objectFit: objectFit,
					}}
				/>
			}

			<MediaTransition />
			<Overlay />
		</div>
	);
}

const LowResImage = props => {
	return <img {...props} />;
};

const HighResImage = props => {
	const handleLoad = () => {
		props.setLoaded(true);
	};

	return <img {...props} onLoad={handleLoad} />;
};

export default MyImage;
