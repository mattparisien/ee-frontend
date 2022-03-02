import React from "react";
import { Heading } from "../../../..";
import Button from "../../../../Button/Button";
import Steps from "./Steps";

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
