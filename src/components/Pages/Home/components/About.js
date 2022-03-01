import React, { useContext, useEffect, useRef } from "react";
import { render } from "react-dom";
import { Paragraph } from "../../..";
import { DataContext } from "../../../Containers/Temp/Authenticated";
import { Megaphone } from "../../../Vector/Svg";
import { StyledAbout } from "./styles";
import ContainerFluid from "../../../Containers/ContainerFluid";

function About(props) {
	const data = useContext(DataContext);
	const paragraphRefs = useRef([]);



	return (
		<ContainerFluid height={"100vh"} hasPaddingVertical>
			<StyledAbout>
				{data.about && (
					<>
						<Paragraph
							size='large'
							indent
							indentTitle='About'
							className='section-who__paragraph1'
						>
							{data.about && data.about.body1}
						</Paragraph>
					</>
				)}
				{/* <Megaphone /> */}
			</StyledAbout>
		</ContainerFluid>
	);
}

export default About;
