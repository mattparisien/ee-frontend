import React, { useContext } from "react";
import { DataContext } from "../../../context/Context";
import ContainerFluid from "../../Containers/ContainerFluid";
import Section from "../../Containers/Section";
import ColorBlobs from "../../Drawings/ColorBlobs";
import Figure from "../../Figure/Figure";
import { Typography, Box } from "@mui/material";
import SplitLayout from "../../Layouts/SplitLayout";
import { Card, CardMedia } from "@mui/material";
import { useMediaQuery } from "@mui/material";
import Markdown from "../../Markdown/Markdown";
import Frame from "../../Vector/Frame";

function ContactPage({ pageHeading }) {
	const { bio } = useContext(DataContext);
	const mobile = useMediaQuery("(max-width: 600px)");

	return (
		<div className='o-page o-page_contact'>
			<Section classes='o-hero'>
				<Typography variant='h1' component='h1' textAlign={"center"}>
					{pageHeading && pageHeading}
				</Typography>
				<ColorBlobs />
			</Section>
			<Section className='o-bio'>
				<ContainerFluid>
					<SplitLayout
						gap={5}
						wrap={mobile ? "wrap" : "nowrap"}
						leftComponent={<Bio text={bio && bio.body} />}
						rightComponent={
							<Portrait
								image={bio && bio.image.src}
								imageAlt={bio && bio.image.imageAlt}
							/>
						}
					/>
				</ContainerFluid>
			</Section>
		</div>
	);
}

function Portrait({ image }) {
	return (
		<Card width='100%' sx={{position: "relative", overflow: "visible"}} className="-frame-reveal">
			<CardMedia component='img' image={image} />
			<Frame/>
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
