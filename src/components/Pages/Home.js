import React, { Fragment, useRef, useEffect } from "react";
import $ from "jquery";
import gsap from "gsap";
import locomotiveScroll from "locomotive-scroll";
import useAxios from "../../helpers/hooks/useAxios";
import Grid from "../../Grid";

export default function Home(props) {
	const { hoverState, setHoverState } = props;
	// const { data, error, loading } = useAxios("http://localhost:1337/api/home");

	const heroWords = ["There's", "a", "better", "way", "to", "work"];

	const missionCopyOne =
		"The Eyes & Ears Agency builds a bridge between the music industry and impactful non-profit organizations. We work to leverage the cultural power of music to amplify the work of non-profit organizations and mobilize musicians’ audiences to take action in support of social and environmental causes.";
	const missionCopyTwo =
		"We facilitate authentic, cause-based partnerships between musicians and vetted organizations that will accelerate change by increasing awareness, shifting behaviors and sparking activism.";

	const words = useRef([]);
	const introAnimation = useRef(gsap.timeline());
	const scrollRef = useRef(null);

	//Scroll init

	// useEffect(() => {

	// 	const scroll = new locomotiveScroll({
	// 		el: scrollRef.current,
	// 		smooth: true
	// 	})
	// }, [])
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
		<div ref={scrollRef}>
			<section className='c-section section-hero -bg-light' data-scroll-section>
				<div className='section-hero__title-wrapper -position-absolute-center'>
					<h1
						className='section-hero__title-wrapper__inner -w-100 -h-100 -position-relative -heading-bold'
						data-scroll
						data-scroll-speed='3'
					>
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
				<div className='section-hero__image-wrapper -position-absolute'></div>
				<div className='section-hero__image-wrapper -position-absolute'></div>
			</section>
			<section className='c-section section-who  -dark' data-scroll-section>
				<div className='object-container'>
					<div className='paragraph-wrapper -pg-large'>
						<p>
							{/* {error && error}
							{loading && "Loading..."}
							{data && data.data.attributes.missionHome} */}
						</p>
					</div>
					<div className='paragraph-wrapper -pg-medium'>
						<p>{missionCopyTwo}</p>
					</div>
				</div>
			</section>
			<section className='c-section section-how' data-scroll-section>
				<div className="object-container">
				<Grid/>
				</div>
				
			</section>
			<section className='c-section section-work' data-scroll-section></section>
		</div>
	);
}
