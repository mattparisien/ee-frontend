import React from "react";
import Section from "../../Containers/Section";
import Container from "../../Containers/ContainerFluid";
import { Box, Typography } from "@mui/material";
import { useContext } from "react";
import { DataContext } from "../../../context/Context";
import InstaPost from "../../InstaPost/InstaPost";

function DemoPage() {
	const data = useContext(DataContext);

	return (
		<Section>
			<Container sx={{ minHeight: "100vh" }}>
				<Typography variant='h1' textAlign='center' pt={10}>
					Insta Posts Demo
				</Typography>
				<Box
					display='flex'
					justifyContent={"space-between"}
					pl={5}
					pr={5}
					pt={10}
				>
					<InstaPost
						postInfo={
							data.projects && data.projects.slice(0, 1)[0].InstagramPost
						}
					/>
					<InstaPost
						postInfo={
							data.projects && data.projects.slice(1, 2)[0].InstagramPost
						}
					/>
				</Box>
				<Box
					display='flex'
					justifyContent={"space-between"}
					pl={5}
					pr={5}
					pt={10}
				>
					<InstaPost
						postInfo={
							data.projects && data.projects.slice(0, 1)[0].InstagramPost
						}
					/>
					<InstaPost
						postInfo={
							data.projects && data.projects.slice(1, 2)[0].InstagramPost
						}
					/>
				</Box>
			</Container>
		</Section>
	);
}

export default DemoPage;
