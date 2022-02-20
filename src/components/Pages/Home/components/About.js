import React, { useContext, useRef, useState } from "react";
import { Container, Paragraph } from "../../..";
import { DataContext } from "../../../Containers/Temp/Authenticated";
import { Megaphone } from "../../../Vector/Svg";
import { StyledAbout } from "./styles";

function About(props) {
	const data = useContext(DataContext);
	const [paras, setParas] = useState(null);
	const paragraphRefs = useRef([]);

	const addToRefs = el => {
		if (el && !paragraphRefs.current.includes(el)) {
			setParas(paragraphRefs.current);
		}
	};

	return (
		<Container height={"auto"} hasPaddingVertical>
			<StyledAbout>
				{data.about && (
					<>
						<Paragraph size='large' className='section-who__paragraph1'>
							{data.about.body1}
						</Paragraph>
					</>
				)}
				<Megaphone />
			</StyledAbout>
		</Container>
	);
}

export default About;
