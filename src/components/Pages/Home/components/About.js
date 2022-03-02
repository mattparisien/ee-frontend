import React, { useContext, useRef } from "react";
import { DataContext } from "../../../Containers/Temp/Authenticated";
import ParagraphLayout from "../../../Text/ParagraphLayout";
import { StyledAbout } from "./styles";


function About(props) {
	const data = useContext(DataContext);
	const paragraphRefs = useRef([]);

	return (
		<StyledAbout>
			{data.about && (
				<>
					<ParagraphLayout
						size='large'
						className='section-who__paragraph1'
						indent
						indentTitle={"About"}
					>
						{data.about && data.about.body1}
					</ParagraphLayout>
				</>
			)}
			{/* <Megaphone /> */}
		</StyledAbout>
	);
}

export default About;
