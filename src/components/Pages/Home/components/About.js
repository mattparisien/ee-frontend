import React, { useRef, useEffect, useContext, useState } from "react";
import { Section, Container, Paragraph } from "../../..";
import useFetch from "../../../../helpers/hooks/useFetch";
import Spinner from "../../../Vector/Spinner";
import { StyledAbout } from "./styles";
import { Megaphone } from "../../../Vector/Svg";
import { DataContext } from "../../../../App";
import SplitText from "gsap/SplitText";

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
		<Section classes={"section-who"} bg={"dark"} hasMarginTop >
			<Container  height={"auto"} hasPaddingVertical>
				<StyledAbout>
					{data.about && (
						<>
							<Paragraph
								size='large'
								
								className='section-who__paragraph1'
							>
								{data.about.body1}
							</Paragraph>
						</>
					)}
					<Megaphone />
				</StyledAbout>
			</Container>
		</Section>
	);
}

export default About;
