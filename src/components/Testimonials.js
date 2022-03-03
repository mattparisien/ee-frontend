import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Button } from "@mui/material";
import { Typography } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

function Testimonials({ items }) {
	return (
		<Carousel
			sx={{ width: "100%" }}
			NextIcon={<ArrowForwardIosIcon />}
			PrevIcon={<ArrowBackIosNewIcon />}
		>
			{items &&
				items.map(item => {
					return <CarouselItem key={item.id} item={item} />;
				})}
		</Carousel>
	);
}

function CarouselItem(props) {
	return (
		<>
			{/* <Typography variant='h2' component='h2' textAlign={"center"}>
				{props.item.heading}
			</Typography> */}
			<Typography variant='h5' component='h5' textAlign='center'>
				{props.item.quote}
			</Typography>
		</>
	);
}

export default Testimonials;
