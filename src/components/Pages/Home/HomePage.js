import React, { useEffect, useRef } from "react";
import ContainerFluid from "../../Containers/ContainerFluid";
import Section from "../../Containers/Section";
import { useContext } from "react";
import { DataContext } from "../../../App";
import ProjectGrid from "../Projects/ProjectGrid";
import Stories from "../../Stories/Stories";
import ReactMarkdown from "react-markdown";
import gsap from "gsap";

function HomePage({ toggleTransitioning, transitioning }) {
	const data = useContext(DataContext);

	const steps = useRef([]);
	steps.current = [];

	useEffect(() => {
		if (data.about) {
			const text = $(".o-about").find(".o-text");

			const newText = replaceAll(text.text(), "_", "hi");

			function replaceAll(str, find, replace) {
				return str.replace(new RegExp(find, "g"), replace);
			}
		}
	}, [data]);

	useEffect(() => {
		if (steps.current) {
			const handleIntersect = entries => {
				entries.forEach(entry => {
					if (entry.isIntersecting && !$(entry.target).hasClass("is-in-view")) {
						gsap.to($(entry.target).find(".c-line"), {
							y: 0,
							opacity: 1,
							ease: 'power3.out',
							stagger: 0.2,
							duration: 2,
							delay: 0.5
						})
					}
				});
			};

			const observer = new IntersectionObserver(handleIntersect);

			steps.current.forEach(item => observer.observe(item));
		}
	}, [steps.current]);

	const addToSteps = el => {
		if (el && !steps.current.includes(el)) {
			steps.current.push(el);
		}
	};

	return (
		<>
			<div className='o-page o-page_home'>
				<Section data-theme='light' classes='-fullHeight'></Section>
				<Section data-theme='dark' classes='o-about -padding-lg'>
					<ContainerFluid classes='-stretchY'>
						<ReactMarkdown
							children={data.about && data.about.body1}
							className='o-text -text-big -split -fadeUp'
						/>
					</ContainerFluid>
				</Section>
				<ContainerFluid classes='-bg-light'>
					<Section classes='-padding-lg'>
						<div className='c-steps'>
							{data &&
								data.steps &&
								data.steps.map((step, i) => {
									return (
										<div className='c-steps_item' key={i} ref={addToSteps}>
											<ReactMarkdown
												className='o-text -text-big -split -fadeUp'
												children={step.title}
												component='h3'
											/>
											<p className='o-text -split -fadeUp'>{step.body}</p>
										</div>
									);
								})}
						</div>
					</Section>
					<Section classes='-padding-lg'>
						{/* First option */}
						<ProjectGrid items={data && data.posts && data.posts.slice(0, 4)} />
						{/* Section option */}
					</Section>
					<Section classes='-padding-lg'>
						<Stories slides={data && data.stories} />
					</Section>
				</ContainerFluid>
			</div>
		</>
	);
}

export default HomePage;
