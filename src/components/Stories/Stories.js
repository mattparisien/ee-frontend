import classNames from "classnames";
import gsap from "gsap";
import React, { forwardRef, useEffect, useRef, useState } from "react";

function Stories({ slides }) {
	const [active, setActive] = useState(1);
	const [hovering, setHovering] = useState(false);
	const stories = useRef([]);
	stories.current = [];

	const addToRefs = el => {
		console.log(el);
		if (el && !stories.current.includes(el)) {
			stories.current.push(el);
		}
	};

	useEffect(() => {
		if (stories.current && slides) {
			const currentSlide = $(`[data-story-id=${active}]`);
			const prevSlide = $(
				`[data-story-id=${active === 1 ? slides.length : active - 1}]`
			);

			console.log("prev", prevSlide);

			gsap.fromTo(
				$(currentSlide).children(),
				{
					y: "50px",
					opacity: 0,
				},
				{
					y: "-50%",
					opacity: 1,
					duration: 0.7,
					delay: 1,
					ease: "power3.out",
					stagger: 0.1,
				}
			);

			gsap.to($(prevSlide).children(), {
				y: "-100px",
				opacity: 0,
				duration: 0.7,
				ease: "power3.in",
				stagger: 0.1,
			});
		}
	}, [stories, active]);

	return (
		<div className='c-stories'>
			<div className='c-stories_indicator'>
				<p className='o-text -uppercase'>
					<span>Story ·</span> <span>{active}</span>{" "}
					<span>/ {slides && slides.length}</span>
				</p>
			</div>
			<div className='c-stories_main'>
				<button
					style={{ background: "none " }}
					className='c-stories_controls c-stories_controls_left'
					onClick={() =>
						setActive(prev =>
							prev - 1 === 0 ? slides && slides.length : prev - 1
						)
					}
				>
					<Arrow isHovering={hovering} />
				</button>
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

				<button
					onMouseEnter={() => setHovering(!hovering)}
					onMouseLeave={() => setHovering(!hovering)}
					style={{ background: "none " }}
					className='c-stories_controls c-stories_controls_right'
					onClick={() =>
						setActive(prev => (prev + 1 === slides.length + 1 ? 1 : prev + 1))
					}
				>
					<Arrow flip={true} isHovering={hovering} />
				</button>
			</div>
		</div>
	);
}

function Story(
	{ heading, author, quote, key, id, active, setActive, addToRefs },
	ref
) {
	const story = useRef(null);
	const tl = useRef(gsap.timeline());

	const classes = classNames(`c-stories_story c-stories_story_${id}`);

	return (
		<div className={classes} ref={addToRefs} data-story-id={id}>
			<h2 className='o-h2'>{heading}</h2>
			<h3 className='o-h3'>{quote}</h3>
			<h4 className='o-h4'>{author}</h4>
		</div>
	);
}

function Arrow({ flip, isHovering }) {
	const svg = useRef(null);
	const tl = useRef(gsap.timeline());

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
			<circle
				class='fill'
				stroke-dashoffset='311'
				stroke-dasharray='311'
				opacity='1'
				cx='50'
				cy='50.3408'
				r='49'
				transform='matrix(1,0,0,1,0,0)'
				stroke='white'
				data-svg-origin='50 50.34080123901367'
			></circle>{" "}
		</svg>
	);
}

export default forwardRef(Stories);
