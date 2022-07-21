import React, { useContext } from "react";
import { GlobalContext } from "../../../../../lib/context";
import Container from "../../../../Containers/ContainerFluid";
import Section from "../../../../Containers/Section";
import Heading from "../../../../Heading/Heading";
import HeroLogo from "./HeroLogo";
import HeroWord from "./HeroWord";
import SplitText from "../../../../HOC/SplitText";

function Hero() {
	const { appState } = useContext(GlobalContext);

	const wordMap = ["Social", "Impact", "Agency"];

	return (
		<Section>
			<Container maxWidth="large">
				<div
					className={`content-wrapper bg-light h-[80vw] md:h-[calc(100vh-200px)] max-h-[600px] min-h-[400px] flex flex-col items-center md:items-start justify-center md:justify-between  py-3 relative`}
				>
					{appState.isIntroComplete && (
						<>
							{wordMap.map((word, i) => (
								<HeroWord
									key={i}
									word={<SplitText>{word}</SplitText>}
									index={i}
								/>
							))}
							<HeroLogo />

							<Heading level={3} wrapperClasses='block md:hidden'>
								<SplitText>Social Impact Agency</SplitText>
							</Heading>
						</>
					)}
				</div>
			</Container>
		</Section>
	);
}

export default Hero;
