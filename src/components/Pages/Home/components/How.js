import React from "react";
import Button from "../../../Button/Button";
import HeadingSection from "../../../Containers/HeadingSection";
import Steps from "../components/Steps";
import ContainerFluid from "../../../Containers/ContainerFluid";
import { Heading } from "../../..";

function How() {
	return (
		<>
			<Heading large>Finding your Rhythm</Heading>

			<Steps />
			<Button variant='contained' color='dark'>
				Get in touch
			</Button>
		</>
	);
}

export default How;
