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
				<Section data-theme='light' classes='-fullHeight'></Section>
				<About aboutText={data.about && data.about.body1} />
				<How steps={data && data.steps} ref={stepsContainer} />

				<Section classes='-padding-lg' data-theme='light'>
					<ContainerFluid>
						<ProjectGrid
							variant='projects'
							items={data && data.posts && data.posts.slice(0, 4)}
						/>
					</ContainerFluid>
				</Section>
				<Section classes='-padding-lg' data-theme='light'>
					<ContainerFluid>
						<Stories slides={data && data.stories} />
					</ContainerFluid>
				</Section>
			</div>
		</>
	);
}

export default HomePage;
