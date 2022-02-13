import React, { useRef, useEffect } from "react";
import { Section, Container, Paragraph } from "../../..";
import useFetch from "../../../../helpers/hooks/useFetch";
import Spinner from "../../../Vector/Spinner";
import { StyledAbout } from "./styles";

function About(props) {
	const [data, error, loading] = useFetch("/api/about", {
		requestType: "textContent",
	});

	useEffect(() => {
		console.log("data", data);
	}, [data]);

	return (
		<Section classes={"section-who"} bg={"dark"} isFullHeight>
			<Container padding={"regular"} height={"auto"}>
				<StyledAbout>
					{loading && <Spinner />}
					{data && (
						<>
							<Paragraph
								
								size={"medium"}
								offsetTop
								className='section-who__paragraph1'
							>
								{data.attributes.Body1}
							</Paragraph>
							<Paragraph size={"small"} className='section-who__paragraph2'>
								{data.attributes.Body2}
							</Paragraph>
						</>
					)}
				</StyledAbout>
			</Container>
		</Section>
	);
}

export default About;
