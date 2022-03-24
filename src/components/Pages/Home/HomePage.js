import React, { useEffect, useRef } from "react";
import ContainerFluid from "../../Containers/ContainerFluid";
import Section from "../../Containers/Section";
import { useContext } from "react";
import { DataContext } from "../../../App";
import ProjectGrid from "../Projects/ProjectGrid";
import Stories from "../../Stories/Stories";
import ReactMarkdown from "react-markdown";
import Megaphone from "../../Vector/Megaphone";
import { BassClef, QuarterNote, WholeNote, HalfNote } from "../../Vector/Notes";
import { Scroll, useLocomotiveScroll } from "react-locomotive-scroll";
import $, { Tween } from "jquery";
import IntertiaPLugin from "gsap/InertiaPlugin";
import gsap from "gsap";
import ScrollTrigger from "gsap/src/ScrollTrigger";

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
				<Section data-theme='light' cxlasses='-fullHeight'></Section>
				<Section data-theme='dark' classes='o-about -padding-lg'>
					<ContainerFluid classes='-stretchY'>
						<ReactMarkdown
							children={data.about && data.about.body1}
							className='o-text -text-big -split -fadeUp'
						/>
						<Megaphone />
					</ContainerFluid>
				</Section>
				<Section classes='o-how' data-theme='light' ref={stepsContainer}>
					<ContainerFluid>
						<h1 className='o-h1 -padding-lg -text-center -split -fadeUp'>
							Finding Your <em>Rhythm</em>
						</h1>
						<div className='steps-container -relative -margin-top-huge'>
							<div className='c-steps'>
								{data &&
									data.steps &&
									data.steps.map((step, i) => {
										return (
											<div className='c-steps_item' key={i}>
												<ReactMarkdown
													className='o-text -text-big -split -fadeUp'
													children={step.title}
													component='h3'
												/>
												<p className='o-text -split -fadeUp'>{step.body}</p>
											</div>
										);
									})}
								<div className='c-steps_sheet'>
									<div className='c-steps_sheet_line' data-scroll></div>
									<div className='c-steps_sheet_line' data-scroll></div>
									<div className='c-steps_sheet_line' data-scroll></div>
									<div className='c-steps_sheet_line' data-scroll></div>
									<div className='c-steps_sheet_line' data-scroll></div>
									<div className='c-steps_sheet_line' data-scroll></div>
									<div className='c-steps_sheet_line' data-scroll></div>
									<div className='c-steps_sheet_line' data-scroll></div>
									<div className='c-steps_sheet_line' data-scroll></div>
									<div className='c-steps_sheet_line' data-scroll></div>
									<div className='c-steps_sheet_line' data-scroll></div>
									<div className='c-steps_sheet_line' data-scroll></div>
									<div className='c-steps_sheet_line' data-scroll></div>
									<div className='c-steps_sheet_line' data-scroll></div>
									<div className='c-steps_sheet_line' data-scroll></div>
						
								</div>
							</div>
							<WholeNote />
							<QuarterNote />
							<BassClef />
							<HalfNote />
						</div>

						<Section classes='-padding-lg'>
							{/* First option */}
							<ProjectGrid
								items={data && data.posts && data.posts.slice(0, 4)}
							/>
							{/* Section option */}
						</Section>
						<Section classes='-padding-lg'>
							<Stories slides={data && data.stories} />
						</Section>
					</ContainerFluid>
				</Section>
			</div>
		</>
	);
}

export default HomePage;
