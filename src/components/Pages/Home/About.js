import React from "react";
import Section from "../../Containers/Section";
import ContainerFluid from "../../Containers/ContainerFluid";
import ReactMarkdown from "react-markdown";
import Megaphone from "../../Vector/Megaphone";

function About({ aboutText }) {
	return (
    <>
		{/* <Section data-theme='dark' classes='o-about'>
			<div className='o-about_content -flex'>
				<div className='o-about_left -padding-lg'>
          
					<ContainerFluid>
          <h2 className="o-h2 -padding-bottom-lg">Who are we?</h2>
						<ReactMarkdown
							children={aboutText}
							className='o-text -text-big -split -fadeUp'
						/>
					</ContainerFluid>
				</div>
				<div className='o-about_right  -padding-lg'>
					<ContainerFluid>
						<Megaphone />
					</ContainerFluid>
				</div>
			</div>
		</Section> */}
		<Section data-theme='dark' classes='o-about -padding-lg'>
			<div className='o-about_content'>
      <Megaphone />
				<div className='o-about_left -padding-lg'>
          
					<ContainerFluid>
          
          {/* <h2 className="o-h2 -padding-bottom-lg">Who are we?</h2> */}
						<ReactMarkdown
							children={aboutText}
							className='o-text -text-big -split -fadeUp'
						/>
					</ContainerFluid>
				</div>
				{/* <div className='o-about_right  -padding-lg'>
					<ContainerFluid>
						<Megaphone />
					</ContainerFluid>
				</div> */}
			</div>
		</Section>
    </>
	);
}

export default About;
