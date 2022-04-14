import { Box, Card, CardMedia, Typography, useMediaQuery } from "@mui/material";
import React, { useContext } from "react";
import { DataContext } from "../../../context/Context";
import ContainerFluid from "../../Containers/ContainerFluid";
import Section from "../../Containers/Section";
import ColorBlobs from "../../Drawings/ColorBlobs";
import SplitLayout from "../../Layouts/SplitLayout";
import Markdown from "../../Markdown/Markdown";
import Frame from "../../Vector/Frame";

function ContactPage({ pageHeading }) {
	const { bio } = useContext(DataContext);
	const mobile = useMediaQuery("(max-width: 600px)");

	console.log(bio)

	return (
		<div className='o-page o-page_contact'>
			<Section classes='o-hero'>
				<Box className='o-hero_content' sx={{ zIndex: 99 }}>
					<Typography variant='h1' component='h1' textAlign={"center"}>
						{pageHeading && pageHeading}
					</Typography>
					<Typography variant='h3' textAlign='center'>
						Sammy Steiner
					</Typography>
				</Box>
				<ColorBlobs />
			</Section>
			<Section className='o-bio'>
				<Box mt={10} mb={10}>
					<ContainerFluid>
						<SplitLayout
							gap={5}
							wrap={mobile ? "wrap" : "nowrap"}
							leftComponent={<Bio text={bio && bio.Body} />}
							rightComponent={
								<Portrait
									image={bio && bio.SelfImage.data.attributes.url}
									imageAlt={bio && bio.SelfImage.data.attributes.alternativeText}
								/>
							}
						/>
					</ContainerFluid>
				</Box>
			</Section>
		</div>
	);
}

function Portrait({ image }) {
	const card = theme => ({
		position: "relative",
		overflow: "visible",
		[theme.breakpoints.down("sm")]: {
			transform: "scale(0.99)",
			
		},
	});

	return (
		<Card width='100%' sx={card} className='-frame-reveal'>
			<CardMedia component='img' image={image} />
			<Frame />
		</Card>
	);
}

function Bio({ text }) {
	return (
		<Box sx={{ height: "100%" }} display='flex' alignItems={"center"}>
			<Typography variant='body1' component='p'>
				<Markdown children={text} />
			</Typography>
		</Box>
	);
}

export default ContactPage;
