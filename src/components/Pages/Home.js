import React, { Fragment, useRef, useEffect } from "react";
import $ from "jquery";
import Section from "../Section";
import { BlobTwo, ClipPath, TextLogo } from "../Svg";
import introAnimation from "../../intro";
import Slider from "../Slider";
import ViewportWrapper from "../ViewportWrapper";
import Heading from "../Heading";
import Container from "../Container";
import Paragraph from "../Paragraph";
import Sticky from "../Sticky";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import locomotiveScroll from "locomotive-scroll";
import { LocomotiveScrollContext } from "react-locomotive-scroll";

export default function Home(props) {
	const { hoverState, setHoverState } = props;

	// useEffect(() => {
	// 	if ($(window).scrollTop() <= 0) {
	// 		introAnimation();
	// 	}
	// }, []);
	//Scroll

	const heroWords = ["There's", "a", "better", "way", "to", "work"];

	const words = useRef([]);
	const introAnimation = useRef(gsap.timeline());
	const scrollRef = useRef(null);

	//Scroll init
	useEffect(() => {
		const scroll = new locomotiveScroll({
			el: scrollRef.current,
			smooth: true,
		});
	});

	useEffect(() => {
		introAnimation.current.to(words.current, {
			y: 0,
			opacity: 1,
			ease: "expo.inout",
			duration: 1,
			stagger: 0.2,
		});
	});

	return (
		<>
			<div className='scroll' ref={scrollRef} data-scroll-container>
				<section
					className='c-section section-hero -bg-light'
					data-scroll-section
				>
					<div className='section-hero__title-wrapper -position-absolute-center'>
						<h1 className='section-hero__title-wrapper__inner -w-100 -h-100 -position-relative -heading-bold' data-scroll data-scroll-speed="3">
							{heroWords.map(word => {
								return (
									<span className='section-hero__title__part word-wrapper heroText -position-absolute'>
										<span
											className='word -fade-down'
											ref={el => (words.current = [...words.current, el])}
										>
											{word}
										</span>
									</span>
								);
							})}
						</h1>
					</div>
				</section>
				<section
					className='c-section section-who  -dark'
					data-scroll-section
				></section>
				<section
					className='c-section section-how'
					data-scroll-section
				></section>
				<section
					className='c-section section-work'
					data-scroll-section
				></section>
			</div>
		</>
	);
}
