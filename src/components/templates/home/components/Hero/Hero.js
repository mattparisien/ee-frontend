import React from "react";
import Container from "../../../../Containers/ContainerFluid";
import Section from "../../../../Containers/Section";
import Heading from "../../../../Heading/Heading";
import SplitText from "../../../../HOC/SplitText";
import HeroLogo from "./HeroLogo";
import HeroWord from "./HeroWord";

function Hero() {
	const wordMap = ["Social", "Impact", "Agency"];

	return (
		<Section>
			<Container>
				<div
					className={`content-wrapper bg-light h-[80vw] md:h-[calc(100vh-200px)] max-h-[600px] min-h-[400px] flex flex-col items-center md:items-start justify-center md:justify-between  py-3 relative`}
				>
					<>
						{wordMap.map((word, i) => (
							<HeroWord
								key={i}
								word={<SplitText>{word}</SplitText>}
								index={i}
							/>
						))}
						<HeroLogo />
					</>

					<Heading level={2} wrapperClasses='block md:hidden'>
						Social Impact Agency
					</Heading>
				</div>
			</Container>
		</Section>
	);
}

export default Hero;
