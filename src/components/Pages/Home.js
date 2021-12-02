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

export default function Home(props) {
	const { hoverState, setHoverState } = props;

	// useEffect(() => {
	// 	if ($(window).scrollTop() <= 0) {
	// 		introAnimation();
	// 	}
	// }, []);

	const heroWords = ["There's", "a", "better", "way", "to", "work"];

	const words = useRef([]);

	console.log(words)

	return (
		<>
			<section className='c-section section-hero -bg-light'>
				<div className='section-hero__title-wrapper -position-absolute-center'>
					<h1 className='section-hero__title-wrapper__inner -w-100 -h-100 -position-relative -heading-bold'>
						{heroWords.map(word => {
							return (
								<span className='section-hero__title__part word-wrapper heroText -position-absolute'>
									<span
										className='word'
										ref={el =>
											(words.current = [
												...words.current,
												words.current.push(el),
											])
										}
									>
										{word}
									</span>
								</span>
							);
						})}
					</h1>
				</div>
			</section>
			<section className='c-section section-who'></section>
			<section className='c-section section-how'></section>
			<section className='c-section section-work'></section>
		</>
	);
}
