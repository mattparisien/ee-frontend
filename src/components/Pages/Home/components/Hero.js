import React, { useRef, useEffect } from "react";

import { Container, Section, Eye, Ear } from "../../../index";

function Hero(props) {
	return (
		<Section
			classes={"section-hero"}
			sectionRef={props.sectionRefs}
			bg={"light"}
		>
			<Container bg={"light"} width='100%' height='100vh'>
				<div className='overflow-container -w-100 -h-100 -position-relative'>
					<Eye speed='2' />
					<div
						className='-heading-bold -position-absolute-center'
						id='hero-amperstand'
					>
						<div
							className='amperstand-inner -position-relative'
							data-scroll
							data-scroll-speed='2'
						>
							<div className='scaler'>
								<span>&</span>
							</div>

							<span className='scroll-cta -position-absolute'>
								<span className='scroll-cta-inner'>Scroll & Enjoy</span>
							</span>
						</div>
					</div>
					<Ear speed='2' />
				</div>
			</Container>

			<div className='section-hero__image-wrapper -position-absolute'></div>
			<div className='section-hero__image-wrapper -position-absolute'></div>
		</Section>
	);
}

export default Hero;
