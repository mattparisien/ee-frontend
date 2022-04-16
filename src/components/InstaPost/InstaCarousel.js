import React from "react";
import { Box } from "@mui/material";
import Carousel from "react-material-ui-carousel";

function InstaCarousel({ items, image, video }) {
	const wrapper = {
		height: "100%",
		width: "100%",
	};

	return (
		<Carousel className='insta-carousel' sx={wrapper}>
			{items.map(item => (
				<Item
					key={item.id}
					type={item.media_type}
					url={item.media_url}
					permalink={item.permalink}
				/>
			))}
		</Carousel>
	);
}

function Item({ type, url, permalink }) {
	const itemWrapper = {};

	return (
		<Box sx={itemWrapper} className='item-wrapper'>
			<Box></Box>
		</Box>
	);
}

export default InstaCarousel;
