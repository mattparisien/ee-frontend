import React, { useEffect, useRef } from "react";
import Section from "../../Containers/Section";
import ContainerFluid from "../../Containers/ContainerFluid";
import { Scroll, useLocomotiveScroll } from "react-locomotive-scroll";
import ScrollTrigger from "gsap/src/ScrollTrigger";
import gsap from "gsap";
import $ from "jquery";
import Figure from "../../Figure/Figure";
import Fade from "react-reveal/Fade";
import Link from "../../Link/Link";
import ProjectGrid from "../Projects/ProjectGrid";
import { Slider } from "react-draggable-slider";
import gsapCore from "gsap/gsap-core";

function Work({ projects }) {
	gsap.registerPlugin(ScrollTrigger);
	const scroll = useLocomotiveScroll();
	const cardTl = useRef(gsap.timeline());
	const cardTimelines = useRef(null);

	const projectList =
		projects &&
		projects.map(project => ({
			title: project.title,
			image: project.media.featureImage.url,
			description: project.subtitle,
		}));

	const sliderSettings = {
		data: projectList && projectList,
		speed: 3000,
		easing: "elastic",
		bgColor: "rgba(255, 255, 255, 0.05)",
		buttonHref: "https://www.google.com",
		buttonTarget: "_self",
		buttonText: "View project",
		showButton: true,
	};

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
									y: -100,
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

			// cardTl.current
			// 	.to(
			// 		$(".o-work_card_1"),
			// 		{
			// 			rotate: $(".o-work_card_1").attr("data-rotate"),
			// 			duration: 2,

			// 			y: "200",
			// 		},
			// 		0
			// 	)
			// 	.to(
			// 		$(".o-work_card_2"),
			// 		{
			// 			rotate: $(".o-work_card_2").attr("data-rotate"),
			// 			duration: 2,
			// 			y: "-200",
			// 		},
			// 		0
			// 	)
			// 	.to(
			// 		$(".o-work_card_3"),
			// 		{
			// 			rotate: $(".o-work_card_3").attr("data-rotate"),
			// 			duration: 2,
			// 			y: -"100",
			// 		},
			// 		0
			// 	);

			// scroll.scroll.on("scroll", e => {
			// 	let rotation = 2 / e.speed;

			// 	setTimeout(() => {
			// 		$(".o-work_card").css({
			// 			transform: `rotate(${rotation += 10}deg)`,
			// 		});
			// 	}, 200);
			// });
		}
	}, [scroll]);

	const speeds = [1, 2, 1];
	const rotations = [0, 10, -10];

	return (
		<Section classes='o-work -padding-huge' data-theme='light'>
			<ContainerFluid>
				<Fade bottom>
					<h1 className='o-h1 -text-center -split -fadeUp'>
						Some of our <em>Selected Works</em>
					</h1>
				</Fade>
				<div className='-padding-huge'>
					<ProjectGrid variant='projects' items={projects && projects} />
				</div>
				<div className='o-work_card-layout'>
					<div className='o-work_card-layout_inner -relative -stretchX -stretchY'>
						{projects &&
							projects.map((project, index) => (
								<Card
									key={project.id}
									title={project.title}
									subtitle={project.subtitle}
									id={(index += 1)}
									src={project.media.featureImage.url}
									scrollSpeed={speeds[index]}
									rotation={rotations[index]}
								/>
							))}
						<h1 className='o-h2 -text-center' >
							Erez Robary
						</h1>
					</div>
				</div>
				<div className='o-work_card-layout'>
					<div className='o-work_card-layout_inner -relative -stretchX -stretchY'>
						{projects &&
							projects.map((project, index) => (
								<Card
									key={project.id}
									title={project.title}
									subtitle={project.subtitle}
									id={(index += 1)}
									src={project.media.featureImage.url}
									scrollSpeed={speeds[index]}
									rotation={rotations[index]}
								/>
							))}
						<h1
							className='o-h2 -text-center o-work_title'
							
						>
							Ekali
						</h1>
					</div>
				</div>
				<div className='o-work_card-layout'>
					<div className='o-work_card-layout_inner -relative -stretchX -stretchY'>
						{projects &&
							projects.map((project, index) => (
								<Card
									key={project.id}
									title={project.title}
									subtitle={project.subtitle}
									id={(index += 1)}
									src={project.media.featureImage.url}
									scrollSpeed={speeds[index]}
									rotation={rotations[index]}
								/>
							))}
						<h1
							className='o-h2 -text-center o-work_title'
							
						>
							<span>Charlie Burg</span>
						</h1>
					</div>
				</div>
				<div className='-padding-huge'></div>
			</ContainerFluid>
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
