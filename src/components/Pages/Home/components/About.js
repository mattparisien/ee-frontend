import React, { useRef, useEffect, useContext } from "react";
import { Section, Container, Paragraph } from "../../..";
import useFetch from "../../../../helpers/hooks/useFetch";
import Spinner from "../../../Vector/Spinner";
import { StyledAbout } from "./styles";
import { Megaphone } from "../../../Vector/Svg";
import { DataContext } from "../../../../App";

function About(props) {
	const data = useContext(DataContext);

	return (
		<Section classes={"section-who"} bg={"dark"} isFullHeight>
			<Container padding={"regular"} height={"auto"}>
				<StyledAbout>
					{data.about && (
						<>
							<Paragraph
								size={"medium"}
								offsetTop
								indent
								className='section-who__paragraph1'
							>
								{data.about.body1}
							</Paragraph>
							<Paragraph
								size={"small"}
								indent
								className='section-who__paragraph2'
							>
								{data.about.body2}
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
