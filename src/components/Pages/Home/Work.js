import gsap from "gsap";
import ScrollTrigger from "gsap/src/ScrollTrigger";
import $ from "jquery";
import React, { useEffect, useRef } from "react";
import { useLocomotiveScroll } from "react-locomotive-scroll";
import Section from "../../Containers/Section";
import Figure from "../../Figure/Figure";
import Link from "../../Link/Link";
import Slider from "../../Slider/Slider";


function Work({ projects }) {
	gsap.registerPlugin(ScrollTrigger);
	const scroll = useLocomotiveScroll();
	const cardTl = useRef(gsap.timeline());
	const cardTimelines = useRef(null);

	useEffect(() => {
		if (scroll && scroll.scroll) {
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

			cardTl.current = gsap.timeline({
				scrollTrigger: {
					scroller: ".scroll-wrapper",
					trigger: ".o-work_card-layout",

					pin: false,
					end: "+=3000",
					scrub: 1,
				},
			});

			const triggers = $(".o-work_card-layout");

			//Init scroll triggers
			cardTimelines.current = Array(triggers.length).fill("temp");
			cardTimelines.current.forEach(
				(el, i) =>
					(cardTimelines.current[i] = ScrollTrigger.create({
						scroller: ".scroll-wrapper",
						trigger: triggers[i],
						pin: false,

						scrub: 1,
						animation: gsap
							.timeline()
							.to(
								$(triggers[i]).find(".o-work_card_1"),
								{
									rotate: "15deg",
									// y: -100,
									duration: 2,
								},
								0
							)
							.to(
								$(triggers[i]).find(".o-work_card_2"),
								{
									rotate: "-10deg",
									duration: 2,
								},
								0
							),
					}))
			);
		}
	}, [scroll]);

	const speeds = [1, 2, 1];
	const rotations = [0, 10, -10];

	return (
		<Section classes='o-work -padding-huge' data-theme='light'>
			<h1 className="o-h1 -text-center -padding-bottom-lg -split -fadeUpChars">Featured Work</h1>
			<Slider items={projects} />
		</Section>
	);
}

function Card({ src, id, rotation, title, subtitle }) {
	const handleMouseEnter = e => {
		const cards = $($(e.target).parents()[2]).find(".o-work_card");
		const heading = $($(e.target).parents()[2]).find(".o-work_title");
		gsap.to(cards[0], {
			rotate: "-=20deg",
			duration: 1,
			ease: "power3.out",
		});
		gsap.to(cards[1], {
			rotate: "+=20deg",
			duration: 1,
			ease: "power3.out",
		});
		gsap.to(heading, {
			scale: 1.2,
			duration: 1,
			ease: "power3.out",
		});
	};

	const handleMouseLeave = e => {
		const cards = $($(e.target).parents()[2]).find(".o-work_card");
		const heading = $($(e.target).parents()[2]).find(".o-work_title");

		gsap.to(cards[0], {
			rotate: "+=20deg",
			duration: 1,
			ease: "power3.out",
		});
		gsap.to(cards[1], {
			rotate: "-=20deg",
			duration: 1,
			ease: "power3.out",
		});
		gsap.to(heading, {
			scale: 1,
			duration: 1,
			ease: "power3.out",
		});
	};

	return (
		<Link classes={`o-work_card o-work_card_${id}`} rotate={rotation}>
			<div
				className='o-work_card_inner -relative -stretchX -stretchY'
				onMouseEnter={handleMouseEnter}
				onMouseLeave={handleMouseLeave}
			>
				<Figure src={src} noReveal />

				<div className='card-info'>
					<h3 className='card-info_title -underline'>{title}</h3>
					<p className='card-info_description -text-tiny'>{subtitle}</p>
				</div>
			</div>
		</Link>
	);
}

export default Work;
