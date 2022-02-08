import React, { useEffect, useRef } from "react";
import { shuffleColors } from "../../helpers/shuffleColors";
import gsap from "gsap";
import MorphSVGPlugin from "gsap/MorphSVGPlugin";
import { StyledTransition } from "./styles";
import useSplit from "../../helpers/hooks/useSplit";
import { DrawnLogo } from "../index";
import { entryAnimation, pageTransitionAnimation } from "./transitionAnims";

function SiteTransition(props) {
	const { themes, isTransitioning } = props;

	const transitionTl = useRef(gsap.timeline({ paused: true }));
	const morphPath = useRef(null);
	const transitionCard = useRef(null);
	const text = useRef(null);
	const logoRef = useRef(null);
	const [isSplit, chars, splitCount] = useSplit([text.current], {
		type: "lines, chars",
		linesClass: "line",
		charsClass: "char",
	});

	useEffect(() => {
		if (text.current && isSplit && morphPath.current) {
			if (isTransitioning) {
				console.log('in hessssssre!')
				const animation = pageTransitionAnimation(
					transitionTl,
					text,
					transitionCard,
					morphPath
				);
				animation.play();
			}
		}
	}, [isSplit, morphPath, text]);

	return (
		<StyledTransition
			className='site-transition-wrapper'
			ref={props.addToRefs}
			ref={transitionCard}
		>
			<div className='site-transition__inner'>
				{/* <div className='transition-drawn-logo'>
					<DrawnLogo animateSoundWaves color={"light"} logoRef={logoRef} />
				</div> */}
				<div className='transition-brand-saying'>
					<div className='transition-brand-saying__sentence' ref={text}>
						Creating social change by harnessing the power of music
					</div>
				</div>
				<svg
					className='transition-clipPath'
					xmlns='http://www.w3.org/2000/svg'
					viewBox='0 0 956.39 577.3'
				>
					<defs>
						<clipPath
							id='transition-clipPath__clip'
							clipPathUnits={"objectBoundingBox"}
						>
							<path
								className='transition-clipPath__path'
								d='M1031.55,768.1H75.16V190.8h956.39Z'
								transform='translate(-75.16 -190.8)'
								ref={morphPath}
							/>
						</clipPath>
					</defs>
				</svg>
			</div>
		</StyledTransition>
	);
}

export default SiteTransition;
