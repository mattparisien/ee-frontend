import classNames from "classnames";
import gsap from "gsap";
import $ from "jquery";
import React, { useEffect, useRef, useState } from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import Fade from "react-reveal/Fade";
import ArrowButton from "../Button/ArrowButton";

function Stories({ slides }) {
	const [active, setActive] = useState(1);
	const [prev, setPrev] = useState(slides && slides.length);

	const stories = useRef([]);
	stories.current = [];

	const addToRefs = el => {
		if (el && !stories.current.includes(el)) {
			stories.current.push(el);
		}
	};

	useEffect(() => {
		if (stories.current && slides) {
			
			const currentSlide = $(`[data-story-id=${active}]`);
			const prevSlide = $(`[data-story-id=${prev}]`);

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
	}, [stories, active, prev, slides]);

	const handlePrevClick = () => {
		setPrev(active);
		setActive(prev => (prev - 1 === 0 ? slides.length : prev - 1));
	};

	const handleNextClick = () => {
		setPrev(active);
		setActive(prev => (prev + 1 === slides.length + 1 ? 1 : prev + 1));
	};

	return (
		<Fade effect={"-frame-reveal"}>
			<div className='c-stories -relative'>
				{/* <Fade effect={'-frame-reveal'}>{withFrame ? <Frame static /> : <Quotation />}</Fade> */}
				<div className='c-frame c-stories_frame'>
					<svg
						id='a'
						xmlns='http://www.w3.org/2000/svg'
						viewBox='0 0 526.38 15.36'
						className='c-frame_svg c-frame_svg_green'
					>
						<defs>
							<style>{".b{fill:#fff;fill-rule:evenodd}"}</style>
						</defs>
						<path
							className='b'
							d='M383.86 7.56c-5.72-.24-11.39-.53-16.86-.66-4.72-.12-9.84.44-14.97.39-5.05-.04-10.12-.6-14.96-.56-2.18.02-4.3.2-6.52.2-5.58 0-10.87-.55-16.26-.57-3.73-.02-7.31.42-11.06.42-5.39 0-10.87-.33-16.27-.33-4.36 0-8.72.43-13.02.41-1.57 0-3.05-.46-4.55-.5-9.64-.3-19.5-.11-29.28-.16-3.68-.02-7.24-.41-11.05-.54-7.44-.25-15.35-.39-23.42-.61-11.17-.31-22.79-.39-33.83-.91-3.47-.16-6.45-.45-11.06-.54-5.02-.09-12.21-.6-18.22-.82-10.92-.41-21.93-1.02-32.53-1.14-4.43-.05-8.62.34-13.01.17-2.84-.11-6.03-.63-9.11-.77C76.27.46 63.55-.25 52.76.09c-3.4.11-6.71.59-10.41.66-6.07.13-12.62-.3-18.22.14-2.66.2-5.13.84-7.81 1.16-2.91.34-6.19.23-8.47 1.15C6.12 5.98 1.27 6.46 0 9.63c1.62.66 2.3.98 3.89 1.46 4.6 1.39 11.82 1.41 17.55 2.26 9.23-.82 19.08.58 27.33.39 2.13-.05 4.34-.37 6.51-.44 5.87-.19 12.35.11 18.22-.14 7.05-.29 13.22-.01 19.52-.13 3.78-.07 8.02-1.07 11.06-.18 5.61-1.33 12.38-.61 18.88-.61 6.18 0 12.21-.43 17.57-.38.88 0 1.69.44 2.6.5 2 .11 4.08-.28 5.86-.21 3.49.14 7.28.38 11.06.54 1.36.06 2.83.48 3.91.5 3.52.07 8.38-.26 10.41-.18 5.9.22 14.01.35 20.17.59 8.74.35 17.33.11 23.42.37 1.82.08 3.43.48 5.21.51 2.33.04 4.83-.22 7.15-.2 4.07.04 8.3.48 12.36.55 7.49.13 15.65.11 23.43.13 7.49.02 15.01.48 22.12.36 2.71-.05 5.17-.42 7.81-.43 14.92-.11 30.01.5 44.9.01 14.06-.46 30.44-1.01 43.06-1.27-.14-2.03-.19-4.06-.12-6.08ZM517.93 11.83c-.93-.07-1.1-.4-1.95-.49-1.34-.14-2.58.05-3.91-.02-4.82-.27-8.76-.88-12.35-1.03-3.03-.13-6.53.29-9.77.19-2.78-.09-5.51-.67-8.45-.77h-.24c-.12 1.29-.21 2.58-.28 3.87 1.92.01 3.8.02 5.71.01 10.83-.03 21.31.08 31.88.9 2.98-.86 6.74 0 7.82-1.4-.74-1.61-5.96-1.06-8.46-1.25Z'
						/>
					</svg>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						viewBox='0 0 14.09 288.28'
						className='c-frame_svg c-frame_svg_yellow'
					>
						<path
							d='M3.64 288.28c-1.4-.59-.56-2.65-1.44-4.28.76-5.79.82-11.53.72-17.46-.05-3.05 0-5.97 0-9.62 0-1.68-.48-3.37-.48-4.99 0-.89.44-1.97.48-2.85.05-1.19-.45-2.38-.48-3.56-.05-1.71.48-3.48.48-5.34 0-1.28-.48-2.72-.48-3.92 0-1.07.42-2.1.48-3.21.11-2.26.1-6.12 0-8.91-.03-.94-.4-1.55-.48-2.49-.19-2.12.05-4.54 0-6.77-.18-7.11-1.01-18.61-1.68-28.15-.57-8.15-.05-16.42-.24-24.59-.03-1.44-.42-2.79-.48-4.27-.16-3.89.26-8.01.24-12.12-.02-4.26-.09-8.73 0-12.83.05-2.23.46-4.54.48-6.77 0-1.27-.27-2.64-.24-3.92.02-.98.41-1.86.48-2.85.22-3.33-.06-8.04.24-12.83.21-3.37.29-7.82.48-11.05.06-1.11-.29-3.78-.24-5.7.02-.59.43-1.4.48-2.14.14-2.07.36-4.15.48-6.06.06-.97-.35-2.11-.24-3.21.05-.5.48-.94.48-1.42.02-2.93-.44-6.23-.48-9.62-.04-3.56.64-7.27-.72-10.34.88-1.67-.15-3.98-.24-6.05-.15-3.45.09-6.83-.24-10.69-.28-3.22-.01-6.77-.24-9.98-.09-1.18-.42-2.4-.48-3.56-.23-4.52 1.11-9.92.24-14.97.82-3.14.79-7.09 2.16-9.62.48-.87.79-1.25 1.44-2.14C7.3.69 7.81 3.34 10.6 4.27c.93 1.25.84 3.04 1.2 4.63.33 1.47.98 2.82 1.2 4.27.46 3.07.08 6.66.24 9.98.1 2.03.59 3.84.72 5.7.41 5.91-.23 12.88-.72 19.24-.13 1.68-.62 3.43-.72 4.99-.15 2.41.27 4.7.24 7.13-.07 5.81-.62 11.83-.96 17.82-.19 3.29-.65 7.23-.72 9.98-.06 2.53-.34 4.16-.48 6.06-.46 6.05-.47 12.41-.72 18.53-.18 4.42-.27 8.75-.48 12.83-.11 2.09-.48 4.04-.48 6.06 0 5.36.24 10.76 0 16.04-.04.82-.48 1.64-.48 2.49 0 2.35.46 4.74.48 7.13.03 2.96-.27 5.96-.24 8.91.02 2.05.48 4.01.48 6.05 0 2.96-.51 5.85-.48 8.91.01 1.22.21 2.37.24 3.57.06 2.65-.47 5.43-.48 8.19-.01 2.81.57 5.61.48 8.2-.13 3.8-.51 7.78-.72 11.76-.33 6.21-.51 11.75-.48 18.89.01 2.91-.45 6.67-.48 9.26-.05 3.86-.52 8.69-.48 14.26.02 2.83.14 5.79 0 8.55-.09 1.61-.65 3.11-.72 4.63-.09 1.77.35 3.69.24 5.35-.13 1.97-.72 4.13-.96 6.77-.07.72.14 1.4 0 2.14-.09.46-.42.56-.48 1.07-.17 1.37.4 4.22-1.2 4.63Z'
							style={{
								fillRule: "evenodd",
							}}
						/>
					</svg>
					<svg
						id='a'
						xmlns='http://www.w3.org/2000/svg'
						viewBox='0 0 553.75 16.54'
						className='c-frame_svg c-frame_svg_red'
					>
						<defs>
							<style>{".b{fill:#fff;fill-rule:evenodd}"}</style>
						</defs>
						<path
							className='b'
							d='M544.86 13.89c-.97-.07-1.15-.4-2.04-.5-1.41-.15-2.72.04-4.11-.04-5.07-.29-9.21-.93-12.99-1.1-3.19-.14-6.87.25-10.27.13-2.92-.11-5.8-.7-8.89-.82-5.3-.2-10.99-.14-16.43-.18-10.7-.07-19.97-.65-27.38-.77-4.98-.09-12.19-.62-17.79-.67-13.71-.12-24.35-.41-36.28-.87-7.65-.29-15.27-.75-22.58-.96-4.97-.14-10.36.38-15.75.31-5.31-.07-10.64-.66-15.74-.65-2.3 0-4.52.18-6.86.17-5.87-.03-11.43-.61-17.11-.66-3.92-.04-7.69.38-11.63.36-5.67-.04-11.43-.39-17.11-.42-4.58-.03-9.18.38-13.7.33-1.65-.02-3.21-.48-4.79-.53-10.14-.35-20.51-.22-30.8-.33-3.87-.04-7.61-.45-11.63-.6-7.83-.29-16.15-.47-24.64-.74-11.75-.37-23.97-.52-35.59-1.1-3.65-.18-6.78-.49-11.63-.6-5.29-.12-12.85-.67-19.16-.93h-.22c-.42 3.07-.81 6.15-1.09 9.22.62.14 1.24.36 1.9.4 2.1.13 4.3-.25 6.16-.18 3.67.16 7.66.42 11.63.6 1.43.07 2.97.5 4.11.52 3.7.09 8.82-.21 10.95-.12 6.2.26 14.74.43 21.21.71 9.19.4 18.23.21 24.64.5 1.92.09 3.6.5 5.48.54 2.46.06 5.08-.2 7.53-.16 4.28.07 8.72.53 13 .62 7.88.18 16.46.2 24.64.26 7.88.07 15.79.57 23.27.49 2.85-.03 5.44-.39 8.22-.39 15.69-.03 31.57.67 47.23.26 18.34-.47 40.43-1.07 54.09-1.1 4.28 0 8.94.28 13.01.14 1.81-.06 3-.41 4.8-.43 5.37-.04 12.78.02 17.11.18 2.12.08 4.09.52 6.16.54 2.31.02 5.07-.42 7.54-.4 3.58.03 6.97.6 10.26.59 2.28 0 4.56-.48 6.85-.41 1.7.06 3.76.52 5.47.54 3.1.03 6.36-.41 9.59-.38 7.02.08 12.62.18 18.48.2 11.39.03 22.42.2 33.53 1.08 3.14-.85 7.09.03 8.23-1.35-.77-1.61-6.26-1.1-8.89-1.29ZM44.59.13C38.2.22 31.32-.24 25.42.16c-2.8.19-5.4.81-8.22 1.11-3.06.33-6.51.2-8.91 1.1C6.45 5.15 1.35 5.61 0 8.77c1.7.67 2.42.99 4.09 1.49 4.83 1.42 12.42 1.47 18.45 2.36 7.33-.58 15.03.11 22.09.42.4-4.39 1.09-8.73 2.2-12.99-.74.04-1.48.07-2.25.08Z'
						/>
					</svg>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						viewBox='0 0 14.09 303.79'
						className='c-frame_svg c-frame_svg_blue'
					>
						<path
							d='M3.64 303.79c-1.4-.62-.56-2.79-1.44-4.51.76-6.1.82-12.15.72-18.4-.05-3.21 0-6.29 0-10.14 0-1.77-.48-3.55-.48-5.26 0-.94.44-2.07.48-3 .05-1.26-.45-2.5-.48-3.76-.04-1.8.48-3.67.48-5.63 0-1.35-.48-2.86-.48-4.13 0-1.13.42-2.22.48-3.38.11-2.38.1-6.45 0-9.39-.03-.99-.4-1.64-.48-2.63-.19-2.23.05-4.79 0-7.14-.18-7.49-1.01-19.61-1.68-29.66-.57-8.59-.05-17.3-.24-25.91-.03-1.52-.42-2.94-.48-4.5-.16-4.1.26-8.44.24-12.77-.02-4.49-.09-9.2 0-13.52.05-2.35.46-4.79.48-7.14 0-1.34-.27-2.78-.24-4.13.02-1.03.41-1.96.48-3.01.22-3.51-.06-8.47.24-13.52.21-3.55.29-8.24.48-11.64.06-1.17-.29-3.98-.24-6.01.02-.62.43-1.47.48-2.26.14-2.18.36-4.37.48-6.38.06-1.02-.35-2.22-.24-3.38.05-.52.48-.99.48-1.5.02-3.09-.44-6.57-.48-10.14-.04-3.75.64-7.66-.72-10.89.88-1.76-.15-4.2-.24-6.38-.15-3.64.09-7.2-.24-11.27-.28-3.39-.01-7.13-.24-10.52-.09-1.25-.42-2.52-.48-3.75-.23-4.76 1.11-10.45.24-15.78.82-3.31.79-7.48 2.16-10.14.48-.92.79-1.32 1.44-2.25 3.18.72 3.69 3.52 6.48 4.5.93 1.31.84 3.21 1.2 4.88.33 1.55.98 2.97 1.2 4.5.46 3.23.08 7.01.24 10.52.1 2.14.59 4.05.72 6.01.41 6.23-.23 13.57-.72 20.28-.13 1.78-.62 3.62-.72 5.26-.15 2.54.27 4.95.24 7.51-.07 6.12-.62 12.47-.96 18.78-.19 3.47-.65 7.62-.72 10.52-.06 2.66-.34 4.38-.48 6.38-.46 6.37-.47 13.08-.72 19.53-.18 4.66-.27 9.22-.48 13.52-.11 2.2-.48 4.26-.48 6.38 0 5.65.24 11.34 0 16.9-.04.86-.48 1.72-.48 2.63 0 2.48.46 5 .48 7.51.03 3.12-.27 6.28-.24 9.39.02 2.16.48 4.23.48 6.38 0 3.12-.51 6.17-.48 9.39.01 1.28.21 2.5.24 3.76.06 2.79-.47 5.72-.48 8.64-.01 2.96.57 5.91.48 8.64-.13 4.01-.51 8.2-.72 12.39-.33 6.54-.51 12.38-.48 19.9.01 3.07-.45 7.03-.48 9.76-.05 4.06-.52 9.16-.48 15.02.02 2.98.14 6.11 0 9.01-.09 1.7-.65 3.28-.72 4.88-.09 1.87.35 3.88.24 5.64-.13 2.07-.72 4.35-.96 7.13-.07.76.14 1.48 0 2.26-.09.49-.42.59-.48 1.12-.17 1.44.4 4.45-1.2 4.88Z'
							style={{
								fillRule: "evenodd",
							}}
						/>
					</svg>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						viewBox='0 0 73.29 58.27'
						className='c-frame_svg c-frame_svg_quote c-frame_svg_quote-top'
					>
						<path d='M16.1 0c12.15 0 17.87 9.3 17.87 20.74 0 15.02-10.38 33.95-28.25 37.53l-.35-1.43c15-3.22 21.8-15.73 21.8-30.75-2.14 3.58-6.43 6.08-11.07 6.08C7.16 32.18 0 25.03 0 16.1S7.16 0 16.1 0Zm39.3 0c12.17 0 17.89 9.3 17.89 20.74 0 15.02-10.38 33.95-28.25 37.53l-.35-1.43c15-3.22 21.8-15.73 21.8-30.75-2.14 3.58-6.43 6.08-11.09 6.08-8.94 0-16.08-7.15-16.08-16.08S46.47 0 55.4 0Z' />
					</svg>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						viewBox='0 0 73.29 58.27'
						className='c-frame_svg c-frame_svg_quote c-frame_svg_quote-bottom'
					>
						<path d='M16.1 0c12.15 0 17.87 9.3 17.87 20.74 0 15.02-10.38 33.95-28.25 37.53l-.35-1.43c15-3.22 21.8-15.73 21.8-30.75-2.14 3.58-6.43 6.08-11.07 6.08C7.16 32.18 0 25.03 0 16.1S7.16 0 16.1 0Zm39.3 0c12.17 0 17.89 9.3 17.89 20.74 0 15.02-10.38 33.95-28.25 37.53l-.35-1.43c15-3.22 21.8-15.73 21.8-30.75-2.14 3.58-6.43 6.08-11.09 6.08-8.94 0-16.08-7.15-16.08-16.08S46.47 0 55.4 0Z' />
					</svg>
				</div>

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
		</Fade>
	);
}

function Story({ heading, author, quote, id, addToRefs }) {
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

export default Stories;
