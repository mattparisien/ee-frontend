import React, { forwardRef, useEffect, useRef } from "react";
import Section from "../../Containers/Section";
import ContainerFluid from "../../Containers/ContainerFluid";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { QuarterNote, WholeNote, BassClef, HalfNote } from "../../Vector/Notes";
import ScrollTrigger from "gsap/src/ScrollTrigger";
import gsap from "gsap";
import $ from "jquery";
import { useLocomotiveScroll } from "react-locomotive-scroll";
import Fade from "react-reveal/Fade";

function How({ steps }) {
	const noteTl = useRef(null);
	const container = useRef(null);
	const scroll = useLocomotiveScroll();

	useEffect(() => {
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
					trigger: $(".o-how .o-container"),
					pin: false,
					onUpdate: () => console.log("updating!"),
					scrub: 1,
				},
			});
		}
	}, [scroll.isReady]);

	useEffect(() => {
		noteTl.current &&
			noteTl.current.to($(".steps-container .c-note"), {
				rotation: "30deg",
			});
	}, [noteTl]);

	return (
		<Section classes='o-how' data-theme='light' ref={container}>
			<ContainerFluid>
				<Fade bottom>
					<h1 className='o-h1 -padding-lg -text-center -split'>
						Finding Your <em>Rhythm</em>
						<hr></hr>
					</h1>
				</Fade>

				<div className='steps-container -relative -margin-top-huge'>
					<div className='c-steps'>
						{steps &&
							steps.map((step, i) => {
								return (
									<div className='c-steps_item' key={i} data-scroll>
										<Fade bottom>
											<ReactMarkdown
											renderers={{ root: React.createElement('p', {className: 'hi'}) }}
												className='title -split'
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
					{/* <WholeNote /> */}
					<QuarterNote id={1} />
					<QuarterNote id={2} />
					{/* <QuarterNote /> */}
					{/* <BassClef /> */}
					{/* <HalfNote /> */}
					<HalfNote id={3} />
				</div>
			</ContainerFluid>
		</Section>
	);
}

export default forwardRef(How);
