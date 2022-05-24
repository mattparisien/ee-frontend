import Section from "../../../../Containers/Section";
import Container from "../../../../Containers/ContainerFluid";
import Markdown from "../../../../Markdown/Markdown";
import Megaphone from "../../../../Vector/Megaphone";

function About({ aboutText }) {
	return (
		<>
		
			<Section sectionTheme='dark'>
				<Container position='relative'>
					<div className='content-wrapper flex flex-col md:flex-row py-20 md:py-0  md:h-[80vh] items-center justify-between md:justify-center'>
						<div className='flex flex-col w-full md:w-1/2'>
							<Markdown>{aboutText}</Markdown>
						</div>
						<div className='graphic-wrapper w-1/2 mt-20 md:mt-0 mx-auto md:mx-0 -scale-x-100 md:rotate-[35deg]'>
							<Megaphone />
						</div>
					</div>
				</Container>
			</Section>
		</>
	);
}

export default About;
