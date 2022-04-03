import gsap from "gsap";
import DrawSVGPlugin from "gsap/DrawSVGPlugin";
import ScrollTrigger from "gsap/src/ScrollTrigger";
import $ from "jquery";
import React, { useEffect, useRef } from "react";
import { useLocomotiveScroll } from "react-locomotive-scroll";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import Fade from "react-reveal/Fade";
import ContainerFluid from "../../Containers/ContainerFluid";
import Section from "../../Containers/Section";
import ColorBlobs from "../../Drawings/ColorBlobs";
import { HalfNote, QuarterNote } from "../../Vector/Notes";

function How({ steps }) {
	gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin);

	const noteTl = useRef(null);
	const container = useRef(null);
	const scroll = useLocomotiveScroll();
	const drawing = useRef(null);

	useEffect(() => {
		const drawings = $(container.current).find("path");
		gsap.set(drawings, { drawSVG: "0%" });

		if (container.current && scroll && scroll.scroll) {
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
				pinType: document.querySelector(".scroll-wrapper")
					.getElementsByClassName.transform
					? "transform"
					: "fixed",
			});

			noteTl.current = gsap.timeline({
				scrollTrigger: {
					scroller: ".scroll-wrapper",
					trigger: $(".o-how"),
					pin: false,
					start: "top top",
					end: "+=2000",
					scrub: 1,
				},
			});
		}
	}, [scroll.isReady, scroll]);

	useEffect(() => {
		noteTl.current &&
			noteTl.current
				.to($(".steps-container .c-note"), {
					duration: 4,
					scale: "1.6",
					rotate: "+=180deg",
				})
				.to(
					$(drawing.current).find("path"),
					{
						drawSVG: "100%",
						duration: 2,
					},
					0
				);
	}, []);

	

	return (
		<Section classes='o-how' data-theme='light' ref={container}>
			<ContainerFluid>
				<h1 className='o-h1 -text-center -padding-top-huge -split -fadeUpChars'>
					Finding Your Rhythm
				</h1>

				<div className='steps-container -relative -margin-top-huge'>
					<div className='c-steps'>
						<div className='c-steps_background'></div>
						{steps &&
							steps.map((step, i) => {
								return (
									<div className='c-steps_item' key={i}>
										<Fade bottom>
											<ReactMarkdown
												components={{
													root: React.createElement("p", { className: "hi" }),
												}}
												className='title'
												children={step.title}
											/>
										</Fade>

										<Fade bottom>
											<p className='body'>{step.body}</p>
										</Fade>
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

					<QuarterNote id={1} />
					<QuarterNote id={2} />

					<QuarterNote id={4} />
					<HalfNote id={3} />
					<ColorBlobs />
				</div>
			</ContainerFluid>
		</Section>
	);
}

export default How;
