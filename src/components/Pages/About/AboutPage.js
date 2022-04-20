import { useQuery } from "@apollo/client";
import { Box, Typography, useMediaQuery } from "@mui/material";
import React, { useEffect, useState } from "react";
import BIO from "../../../api/graphql/queries/static/GetBio";
import ContainerFluid from "../../Containers/ContainerFluid";
import Page from "../../Containers/Page";
import Section from "../../Containers/Section";
import ColorBlobs from "../../Drawings/ColorBlobs";
import Media from "../../Media/Media";

function AboutPage({ pageHeading, location }) {
	// const { bio } = useContext(DataContext);
	const [info, setInfo] = useState(null);
	const { loading, error, data } = useQuery(BIO);
	const mobile = useMediaQuery("(max-width: 600px)");

	useEffect(() => {
		if (!loading && data) {
			setInfo({
				body: data.bio.data.attributes.Body,
				image: {
					url: data.bio.data.attributes.SelfImage.data.attributes.url,
					alt: data.bio.data.attributes.SelfImage.data.attributes
						.alternativeText,
				},
			});
		}
	}, [loading, data]);

	const splitLayout = {
		display: "flex",
		alignItems: "center",
	};

	return (
		<Page name='contact' location={location}>
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
						<Box className='split-layout' sx={splitLayout}>
							{info && (
								<>
									<Box className='text' sx={{ flex: 1 }} mr={20}>
										<Typography variant='body1' component='p'>
											{info.body}
										</Typography>
									</Box>
									<Box className='image' sx={{ flex: 0.7 }}>
										<Media
											src={info.image.url}
											aspectRatio={1}
											variant='image'
										/>
									</Box>
								</>
							)}
						</Box>
					</ContainerFluid>
				</Box>
			</Section>
		</Page>
	);
}

export default AboutPage;
