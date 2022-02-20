import React from "react";
import Button from "../../../Button/Button";
import HeadingSection from "../../../Containers/HeadingSection";
import { Container } from "../../../index";
import Steps from "../components/Steps";

function How() {

	return (
		<>
			<Container padding='regular' height='auto' hasPaddingBottom>
				<HeadingSection
					headingSize='large'
					color='dark'
					headingText={"How We Do It"}
					headingWeight='light'
					headingWidth='100%'
				/>
			</Container>
			<Steps />
			<Button variant='contained' color='dark'>
				Get in touch
			</Button>
		</>
	);
}

export default How;
