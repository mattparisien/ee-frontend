import React, { useContext, useMemo } from "react";
import { SiteWideControls } from "../../../../context/Context";
import Container from "../../../Containers/ContainerFluid";
import Section from "../../../Containers/Section";
import SplitText from "../../../HOC/SplitText";
import "./Hero.css";
import HeroLogo from "./HeroLogo";
import HeroWord from "./HeroWord";
import Heading from "../../../Heading/Heading";

function Hero() {
	const { introDone } = useContext(SiteWideControls);

	const wordMap = ["Social", "Impact", "Agency"];

	return (
		<Section data-theme='light' classes='o-hero ' noGutter>
			<Container>
				<div className='content-wrapper h-[80vw] md:h-[calc(100vh-200px)] max-h-[600px] min-h-[400px] flex flex-col items-center md:items-start justify-end md:justify-between  py-3 relative'>
					{introDone && (
						<>
							{wordMap.map((word, i) => (
								<HeroWord
									key={i}
									word={<SplitText isReady={introDone}>{word}</SplitText>}
									index={i}
								/>
							))}
							<HeroLogo />
						</>
					)}
					<Heading level={2} wrapperClasses='block md:hidden'>
						Social Impact Agency
					</Heading>
				</div>
			</Container>
		</Section>
	);
}

export default Hero;
