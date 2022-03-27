import React, { useEffect, useRef } from "react";
import Section from "../../Containers/Section";
import ContainerFluid from "../../Containers/ContainerFluid";
import { Scroll, useLocomotiveScroll } from "react-locomotive-scroll";
import ScrollTrigger from "gsap/src/ScrollTrigger";
import gsap from "gsap";
import $ from "jquery";
import Figure from "../../Figure/Figure";
import Fade from "react-reveal/Fade";

function Work({ projects }) {
	gsap.registerPlugin(ScrollTrigger);
	const scroll = useLocomotiveScroll();
	const cardTl = useRef(gsap.timeline());

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
					trigger: ".o-work",

					pin: false,
					end: "+=3000",
					scrub: 1,
				},
			});

			cardTl.current
				.to(
					$(".o-work_card_1"),
					{
						rotate: $(".o-work_card_1").attr("data-rotate"),
						duration: 2,
						y: "-100",
					},
					0
				)
				.to(
					$(".o-work_card_2"),
					{
						rotate: $(".o-work_card_2").attr("data-rotate"),
						duration: 2,
						y: "-200",
					},
					0
				)
				.to(
					$(".o-work_card_3"),
					{
						rotate: $(".o-work_card_3").attr("data-rotate"),
						duration: 2,
						y: -"100",
					},
					0
				);

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

	return (
		<Section classes='o-work -padding-huge' data-theme='light'>
			<ContainerFluid>
				<Fade bottom>
					<h1 className='o-h1 -text-center -split -fadeUp'>
						Some of our <em>Selected Works</em>
					</h1>
				</Fade>
				{/* <ProjectGrid
							variant='projects'
							items={data && data.posts && data.posts.slice(0, 4)}
						/> */}
				<div className='o-work_card-layout'>
					<div className='o-work_card-layout_inner -relative -stretchX -stretchY'>
						{projects &&
							projects.map((project, index) => (
								<Fade bottom>
									<Card
										key={project.id}
										id={(index += 1)}
										src={project.media.featureImage.url}
										scrollSpeed={speeds[index]}
										rotation={index % 2 === 0 ? "-30" : "10"}
									/>
								</Fade>
							))}
					</div>
				</div>
			</ContainerFluid>
		</Section>
	);
}

function Card({ src, id, rotation }) {
	return (
		<Figure
			src={src}
			classes={`o-work_card o-work_card_${id}`}
			rotate={rotation}
		/>
	);
}

export default Work;
