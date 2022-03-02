import React, { useContext, useEffect, useRef } from "react";
import { render } from "react-dom";
import { Paragraph } from "../../..";
import { DataContext } from "../../../Containers/Temp/Authenticated";
import { Megaphone } from "../../../Vector/Svg";
import { StyledAbout } from "./styles";
import ContainerFluid from "../../../Containers/ContainerFluid";
import ParagraphLayout from "../../../Text/ParagraphLayout";

function About(props) {
	const data = useContext(DataContext);
	const paragraphRefs = useRef([]);

	return (
		<StyledAbout>
			{data.about && (
				<>
					<ParagraphLayout size='large' className='section-who__paragraph1'>
						{data.about && data.about.body1}
					</ParagraphLayout>
				</>
			)}
			{/* <Megaphone /> */}
		</StyledAbout>
	);
}

export default About;
