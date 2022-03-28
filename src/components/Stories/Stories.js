import classNames from "classnames";
import gsap from "gsap";
import React, { useEffect, useRef, useState } from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import Fade from "react-reveal/Fade";
import { shuffleColors } from "../../helpers/shuffleColors";
import ArrowButton from "../Button/ArrowButton";
import Quotation from "../Vector/Quotation";
import Frame from "../Vector/Frame";

function Stories({ slides, withFrame }) {
	const [active, setActive] = useState(1);
	const [prev, setPrev] = useState(slides && slides.length);
	const [fill, setFill] = useState(null);
	const stories = useRef([]);
	stories.current = [];

	const addToRefs = el => {
		if (el && !stories.current.includes(el)) {
			stories.current.push(el);
		}
	};

	useEffect(() => {
		const getColor = () => {
			const color = shuffleColors();

			if (color[0] === fill) {
				return getColor();
			} else {
				return color;
			}
		};

		setFill(getColor());

		if (stories.current && slides) {
			const quotation = $(".c-quotation").find("path");
			const currentSlide = $(`[data-story-id=${active}]`);
			const prevSlide = $(`[data-story-id=${prev}]`);

			// console.log("prev slide", prevSlide);

			gsap.to(quotation, {
				fill: fill && fill[0],
				duration: 0.5,
				delay: 1,
			});

			gsap.fromTo(
				currentSlide,
				{
					y: "50%",
				},
				{
					y: 0,
					duration: 1,
					opacity: 1,
					ease: "power3.out",
					delay: 1,
				}
			);

			gsap.fromTo(
				prevSlide,
				{
					y: 0,
				},
				{
					y: "-50%",
					duration: 1,
					ease: "power3.in",
					opacity: 0,
				}
			);
		}
	}, [stories, active]);

	const handlePrevClick = () => {
		setPrev(active);
		setActive(prev => (prev - 1 === 0 ? slides.length : prev - 1));
	};

	const handleNextClick = () => {
		setPrev(active);
		setActive(prev => (prev + 1 === slides.length + 1 ? 1 : prev + 1));
	};

	return (
		<div className='c-stories -relative'>
			<Fade bottom>{withFrame ? <Frame static/> : <Quotation />}</Fade>
			<div className='c-stories_mobile-bg'></div>
			<div className='c-stories_indicator'>
				<h4 className='o-text -uppercase'>
					<span>Story ·</span> <span>{active}</span> <span>/</span>
					<span>{slides && slides.length}</span>
				</h4>
			</div>
			<div className='c-stories_main'>
				<div className='c-stories_content'>
					{slides &&
						slides.map(slide => (
							<Story
								addToRefs={addToRefs}
								heading={slide.heading}
								quote={slide.quote}
								author={slide.author}
								key={slide.id}
								id={slide.id}
								active={active}
								setActive={setActive}
							/>
						))}
				</div>
				<Fade>
					<div className='c-stories_controls'>
						<ArrowButton handleClick={handlePrevClick} />
						<ArrowButton
							flip={true}
							rotation={180}
							handleClick={handleNextClick}
						/>
					</div>
				</Fade>
			</div>
		</div>
	);
}

function Story(
	{ heading, author, quote, id, active, setActive, addToRefs },
	ref
) {
	const story = useRef(null);
	const tl = useRef(gsap.timeline());
	const classes = classNames(`c-stories_story c-stories_story_${id}`);

	return (
		<div className={classes} ref={addToRefs} data-story-id={id}>
			<Fade bottom>
				<h2 className='o-h2'> {heading}</h2>

				<ReactMarkdown children={quote} />

				<h4 className='o-h4'>{author}</h4>
			</Fade>
		</div>
	);
}

function Arrow({ flip, isHovering }) {
	const svg = useRef(null);

	return (
		<svg
			ref={svg}
			className='c-arrow-svg'
			viewBox='0 0 100 101'
			fill='none'
			width='100%'
			height='100%'
			xmlns='http://www.w3.org/2000/svg'
			style={{
				opacity: 1,
				visibility: "inherit",
				transform: `rotate(${flip ? "180deg" : 0})`,
			}}
		>
			{" "}
			<path d='M42.84 45.3408C42.0133 47.0475 41.24 48.3275 40.52 49.1808L63.84 49.1808V50.8608L40.52 50.8608C41.24 51.7142 42.0133 52.9942 42.84 54.7008H41.44C39.76 52.7542 38 51.3142 36.16 50.3808L36.16 49.6608C38 48.7542 39.76 47.3142 41.44 45.3408L42.84 45.3408Z'></path>{" "}
			<path
				d='M42.84 45.3408C42.0133 47.0475 41.24 48.3275 40.52 49.1808L63.84 49.1808V50.8608L40.52 50.8608C41.24 51.7142 42.0133 52.9942 42.84 54.7008H41.44C39.76 52.7542 38 51.3142 36.16 50.3808L36.16 49.6608C38 48.7542 39.76 47.3142 41.44 45.3408L42.84 45.3408Z'
				className='c-arrow-svg_arrow'
			></path>{" "}
			<circle
				opacity='0.2'
				cx='50'
				cy='50.3408'
				r='49'
				transform='rotate(-180 50 50.3408)'
			></circle>{" "}
			<circle cx='50' cy='50.3408' r='49'></circle>{" "}
		</svg>
	);
}

export default Stories;
