import React, { useEffect, useRef } from "react";
import { shuffleColors } from "../../helpers/shuffleColors";
import gsap from "gsap";
import MorphSVGPlugin from "gsap/MorphSVGPlugin";
import { StyledTransition } from "./styles";
import useSplit from "../../helpers/hooks/useSplit";
import { DrawnLogo } from "../index";

function SiteTransition(props) {
	const { themes, isTransitioning } = props;

	const transitionTl = useRef(gsap.timeline());
	const morphPath = useRef(null);
	const transitionCard = useRef(null);
	const text = useRef(null);
	const [isSplit, chars, splitCount] = useSplit([text.current], {
		type: "lines, chars",
		linesClass: "line",
		charsClass: "char",
	});

	useEffect(() => {
		gsap.registerPlugin(MorphSVGPlugin);

		if (text.current && isSplit && morphPath.current) {
			const q = gsap.utils.selector(text.current);
			transitionTl.current
				.set(transitionCard.current, { display: "block" })
				.to(q(".line .char"), {
					y: 0,
					duration: 0.5,
					stagger: 0.01,
					opacity: 1,
					ease: "expo.easeInOut",
				})
				.to(q(".line .char"), {
					delay: 1,
					y: "-100%",
					duration: 0.5,
					stagger: 0.01,
					opacity: 0,
				})
				.to(morphPath.current, {
					morphSVG:
						"M2505.2,3093.81c-703.34-472.72-1411-493.56-2119.07,15.63V2556.23H2505.2Z",
					duration: 1,
					ease: "power3.in",
				})
				.to(morphPath.current, {
					morphSVG:
						"M2505.2,2568c-496.19-8.93-1335.39,2-2119.07-5.08v-6.64H2505.2Z",
					duration: 0.5,
					ease: "power3.out",
				})
				.set(transitionCard.current, {
					display: "none",
				});
		}
	}, [text, morphPath, transitionCard, isSplit]);

	return (
		<StyledTransition
			className='site-transition-wrapper'
			ref={props.addToRefs}
			ref={transitionCard}
		>
			<div className='site-transition__inner'>
				<div className='transition-drawn-logo'>
					<DrawnLogo animateSoundWaves />
				</div>
				<div className='transition-brand-saying'>
					<div className='transition-brand-saying__sentence' ref={text}>
						Creating social change by harnessing the power of music
					</div>
				</div>
				<svg
					className='transition-clipPath'
					xmlns='http://www.w3.org/2000/svg'
					viewBox='0 0 1 1'
				>
					<defs>
						<clipPath
							id='transition-clipPath__clip'
							clipPathUnits={"objectBoundingBox"}
						>
							{" "}
							<path
								className='transition-clipPath__path'
								d='M2505.2,3859.55H386.13V2556.23H2505.2Z'
								transform='translate(-386.13 -2556.23)'
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
