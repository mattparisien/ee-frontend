import React from "react";
import Button from "../../../Button/Button";
// import HeadingSection from "../../../Containers/HeadingSection";
import Steps from "../components/Steps";
import ContainerFluid from "../../../Containers/ContainerFluid";

function How() {

	return (
		<>
			<ContainerFluid padding='regular' height='auto' >
				{/* <HeadingSection
					headingSize='large'
					color='dark'
					headingText={"How We Do It"}
					headingWeight='light'
					headingWidth='100%'
				/> */}
			</ContainerFluid>
			{/* <Steps /> */}
			<Button variant='contained' color='dark'>
				Get in touch
			</Button>
		</>
	);
}

export default How;
