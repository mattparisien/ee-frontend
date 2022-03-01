import React, { useContext, useEffect, useRef } from "react";
import { render } from "react-dom";
import { Container, Paragraph } from "../../..";
import { DataContext } from "../../../Containers/Temp/Authenticated";
import { Megaphone } from "../../../Vector/Svg";
import { StyledAbout } from "./styles";

function About(props) {
	const data = useContext(DataContext);
	const paragraphRefs = useRef([]);

	return (
		<Container height={"100vh"} hasPaddingVertical>
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
		</Container>
	);
}

export default About;
