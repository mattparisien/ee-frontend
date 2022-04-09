import React from "react";
import { Typography } from "@mui/material";
import Section from "../../Containers/Section";
import Container from "../../Containers/ContainerFluid";
import { useMediaQuery } from "@mui/material";

function NotFoundPage() {

  const mobile = useMediaQuery('(max-width: 600px)');

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
				<Typography variant='h1' textAlign="center">404  {mobile && <br></br>}Not Found</Typography>
			</Container>
		</Section>
	);
}

export default NotFoundPage;
