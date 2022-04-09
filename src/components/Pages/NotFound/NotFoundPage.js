import React from "react";
import { Typography } from "@mui/material";
import Section from "../../Containers/Section";
import Container from "../../Containers/ContainerFluid";

function NotFoundPage() {

  const container = {
    height: "80vw",
    maxHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  }

	return (
		<Section>
			<Container sx={container}>
				<Typography variant='h1' textAlign="center">404 Not Found</Typography>
			</Container>
		</Section>
	);
}

export default NotFoundPage;
