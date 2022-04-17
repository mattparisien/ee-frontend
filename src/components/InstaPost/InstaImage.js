import { useEffect, useMemo } from "react";
import { Box } from "@mui/material";
import useAspectRatio from "./helpers/useAspectRatio";
import { CardMedia } from "@mui/material";

const InstaImage = ({ src, alt, preserveAspectRatio }) => {
	const aspectRatio = useAspectRatio(src);

	const imageWrapper = {
		width: "100%",
		aspectRatio: `1 / ${preserveAspectRatio ? aspectRatio : 1}`,
		overflow: "hidden",
		img: {
			width: "100%",
			height: "100%",
			objectFit: "cover",
			objectPosition: "center",
		},
	};

	return (
		<Box className='image-wrapper' sx={imageWrapper}>
			<Box component='img' className='image' src={src}></Box>
		</Box>
	);
};

export default InstaImage;
