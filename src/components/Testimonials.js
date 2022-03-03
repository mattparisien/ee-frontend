import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Button } from "@mui/material";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

function Testimonials({ items }) {
	return (
		<>
			<Box
				sx={{
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
					alignItems: "center",
					width: "100%",
				}}
			>
				<Typography variant='h2' component='h2' mb={4}>
					What People Are Saying
				</Typography>
				<Box
					sx={{
						height: "100%",
						width: "100%",
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
					}}
				>
					<Carousel
						sx={{
							width: "100%",
							height: "auto",
							"&  .css-1m9128y": {
								marginTop: 4,
							},
						}}
						NextIcon={<ArrowForwardIosIcon />}
						PrevIcon={<ArrowBackIosNewIcon />}
					>
						{items &&
							items.map(item => {
								return <CarouselItem key={item.id} item={item} />;
							})}
					</Carousel>
				</Box>
			</Box>
		</>
	);
}

function CarouselItem(props) {
	return (
		<>
			{/* <Typography variant='h2' component='h2' textAlign={"center"}>
				{props.item.heading}
			</Typography> */}
			<Typography variant='h4' component='h4' textAlign='center'>
				{props.item.quote}
			</Typography>
			<Typography variant='h5' component='h5' textAlign='center' mt={5} mb={5}>
				{props.item.author}
			</Typography>
		</>
	);
}

export default Testimonials;
