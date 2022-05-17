import { Box } from "@mui/material";
import React, { useEffect } from "react";
import useImageOnLoad from "../../helpers/hooks/useImageOnLoad";
import classNames from "classnames";
import { useInView } from "react-intersection-observer";

function Image({
	lowResSrc,
	highResSrc,
	alt,
	lowResClasses,
	highResClasses,
	useIO,
}) {
	const { handleImageOnLoad, isLoaded } = useImageOnLoad();
	const { ref, inView, entry } = useInView({
		triggerOnce: true,
		threshold: 0,
		skip: !useIO,
	});

	const lowResStyles = {
		display: isLoaded ? "none" : "block",
		objectPosition: 'center',
		objectFit: "cover",
	};
	const highResStyles = {
		display: isLoaded ? "block" : "none",
		objectFit: "cover",
		objectPosition: 'center'
	};

	const classesLowRes = classNames("img-lowRes w-full h-full", {
		[lowResClasses]: lowResClasses,
	});

	const classesHighRes = classNames("img-highRes w-full h-full", {
		[highResClasses]: highResClasses,
	});

	return (
		<Box className='Image w-full h-full'>
			{useIO && inView && (
				<Box
					component='img'
					className={classesHighRes}
					src={highResSrc}
					alt={alt}
					sx={highResStyles}
					onLoad={handleImageOnLoad}
				></Box>
			)}
			{!useIO && (
				<Box
					component='img'
					className={classesHighRes}
					src={highResSrc}
					alt={alt}
					sx={highResStyles}
					onLoad={handleImageOnLoad}
				></Box>
			)}
			<Box
				ref={ref}
				component='img'
				className={classesLowRes}
				src={lowResSrc}
				alt={alt}
				sx={lowResStyles}
			></Box>
		</Box>
	);
}

export default Image;
