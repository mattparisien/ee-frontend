import React from "react";
import ReactMarkdown from "react-markdown";
import ContainerFluid from "../../Containers/ContainerFluid";
import Section from "../../Containers/Section";
import Megaphone from "../../Vector/Megaphone";
import Reveal from "react-reveal";
import Vibrations from "../../Vector/Vibrations";

function About({ aboutText }) {
	return (
		<>
			<Section data-theme='dark' classes='o-about -padding-lg'>
				<div className='o-about_content'>
					<Reveal>
						<div className='o-about_right -relative -padding-lg'>
							<ContainerFluid classes='-sretchX -stretchY'>
								<div className='inner -relative -stretchY'>
									<Megaphone />
									<Vibrations />
								</div>
							</ContainerFluid>
						</div>
					</Reveal>
					<div className='o-about_left -padding-lg'>
						<ContainerFluid>
							<h4>
								<ReactMarkdown
									disallowedElements={["p"]}
									unwrapDisallowed
									children={aboutText}
								/>
							</h4>
						</ContainerFluid>
					</div>
				</div>
			</Section>
		</>
	);
}

export default About;
