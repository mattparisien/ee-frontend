import React from "react";
import ReactMarkdown from "react-markdown";
import ContainerFluid from "../../Containers/ContainerFluid";
import Section from "../../Containers/Section";
import Megaphone from "../../Vector/Megaphone";

import Vibrations from "../../Vector/Vibrations";

function About({ aboutText }) {
	return (
		<>
			<Section data-theme='dark' classes='o-about -padding-lg'>
				<div className='o-about_content'>
					<div className='o-about_right -relative -padding-lg'>
						<ContainerFluid classes='-sretchX -stretchY'>
							<div className='inner -relative -stretchY'>
								<Megaphone />
								<Vibrations/>
							</div>
						</ContainerFluid>
					</div>
					<div className='o-about_left -padding-lg'>
						<ContainerFluid>
							<ReactMarkdown
								components={{
									root: React.fragment,
								}}
								className='o-text -text-big -split -fadeUpLines'
								children={aboutText}
							/>
						</ContainerFluid>
					</div>
				</div>
			</Section>
		</>
	);
}

export default About;
