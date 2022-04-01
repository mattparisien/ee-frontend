import gsap from "gsap";
import IntertiaPLugin from "gsap/InertiaPlugin";
import ScrollTrigger from "gsap/src/ScrollTrigger";
import React, { useContext, useEffect, useRef } from "react";
import { useLocomotiveScroll } from "react-locomotive-scroll";
import { DataContext } from "../../../App";
import ContainerFluid from "../../Containers/ContainerFluid";
import Section from "../../Containers/Section";
import Stories from "../../Stories/Stories";
import ProjectGrid from "../Projects/ProjectGrid";
import About from "./About";
import How from "./How";
import Work from "./Work";
import { DrawnLogo } from "../../Vector/Svg";

function HomePage({ toggleTransitioning, transitioning }) {
	gsap.registerPlugin(IntertiaPLugin, ScrollTrigger);
	const data = useContext(DataContext);

	const scroll = useLocomotiveScroll();

	const stepsContainer = useRef(null);
	const noteTimelines = useRef([]);
	const isFirstRender = useRef(true);

	useEffect(() => {
		ScrollTrigger.scrollerProxy(".scroll-wrapper", {
			scrollTop(value) {
				return arguments.length
					? scroll.scroll.scrollTo(value, 0)
					: scroll.scroll.scroll.instance.scroll.y;
			},
			getBoundingClientRect() {
				return {
					top: 0,
					left: 0,
					width: window.innerWidth,
					height: window.innerHeight,
				};
			},
			pinType: document.querySelector(".scroll-wrapper").getElementsByClassName
				.transform
				? "transform"
				: "fixed",
		});

		// if (scroll && scroll.scroll && stepsContainer.current) {
		// 	//Create individual timelines for each note

		// 	if (isFirstRender.current) {
		// 		const items = $("[data-rotate]");
		// 		console.clear();
		// 		console.log(items[0]);

		// 		const rotationTween = gsap.to($('[data-rotate]'), {
		// 			rotation: "30"
		// 		})

		// 		ScrollTrigger.create({
		// 			animation: rotationTween,
		// 			trigger: stepsContainer.current,
		// 			scroller: ".scroll-wrapper",
		// 			start: "top top",
		// 			scrub: true,
		// 		});
		// 		isFirstRender.current = false;
		// 	}
		// }
	}, [stepsContainer.current, scroll]);

	return (
		<>
			<div className='o-page o-page_home'>
				<Section data-theme='light' classes='o-hero -padding-bottom-lg'>
					<ContainerFluid classes='-stretchX -stretchY'>
						<div className='o-hero_inner -relative -stretchX -stretchY'>
							<div
								className='o-hero_word -split -fadeUpChars'
						
							>
								Social
							</div>
							<div
								className='o-hero_word -split -fadeUpChars'
			
							>
								Impact
							</div>
							<div
								className='o-hero_word -split -fadeUpChars'
						
							>
								Agency
							</div>
							<div className='o-hero_logo'>
								<div className='inner -relative'>
									<DrawnLogo />
									<div className='revealer'></div>
								</div>
							</div>
						</div>
					</ContainerFluid>
				</Section>
				<About aboutText={data.about && data.about.body1} />
				<How steps={data && data.steps} />

				<Work projects={data.posts && data.posts.slice(0, 6)} />

				<Section
					classes='-padding-lg  -fullHeight -flex -align-center -justify-center'
					data-theme='light'
				>
					<ContainerFluid>
						<Stories slides={data && data.stories} withFrame />
					</ContainerFluid>
				</Section>
			</div>
		</>
	);
}

export default HomePage;
