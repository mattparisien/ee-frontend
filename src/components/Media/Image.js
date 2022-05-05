import { Box } from "@mui/material";
import React from "react";
import useImageOnLoad from "../../helpers/hooks/useImageOnLoad";
import classNames from "classnames";

function Image({ lowResSrc, highResSrc, alt, lowResClasses, highResClasses }) {
	const { handleImageOnLoad, isLoaded } = useImageOnLoad();

	const lowResStyles = { display: isLoaded ? "none" : "block" };
	const highResStyles = { display: isLoaded ? "block" : "none" };

	const classesLowRes = classNames("img-lowRes", {
		[lowResClasses]: lowResClasses,
	});

	const classesHighRes = classNames("img-highRes", {
		[highResClasses]: highResClasses,
	});

	return (
		<Box className='Image'>
			<Box
				component='img'
				className={classesHighRes}
				src={highResSrc}
				alt={alt}
				sx={highResStyles}
				onLoad={handleImageOnLoad}
			></Box>
			<Box
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
