import { Box } from "@mui/material";


const InstaImage = ({ src, alt }) => {
	const imageWrapper = {
		height: "100%",
		height: "100%",
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