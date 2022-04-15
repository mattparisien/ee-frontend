import gsap from "gsap";
import IntertiaPLugin from "gsap/InertiaPlugin";
import ScrollTrigger from "gsap/src/ScrollTrigger";
import React, { useContext, useEffect } from "react";
import { useLocomotiveScroll } from "react-locomotive-scroll";
import { DataContext } from "../../../context/Context";
import ContainerFluid from "../../Containers/ContainerFluid";
import Section from "../../Containers/Section";
import Stories from "../../Stories/Stories";
import About from "./About";
import Hero from "./Hero";
import How from "./Steps/How";
import Work from "./Work";
import { Box } from "@mui/material";
import InstaPost from "../../InstaPost/InstaPost";

function HomePage({ pageHeading }) {
	gsap.registerPlugin(IntertiaPLugin, ScrollTrigger);
	const data = useContext(DataContext);
	const scroll = useLocomotiveScroll();

	useEffect(() => {
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
			pinType: document.querySelector(".scroll-wrapper").getElementsByClassName
				.transform
				? "transform"
				: "fixed",
		});
	}, [scroll]);

	return (
		<>
			<div className='o-page o-page_home'>
				<Hero pageHeading={pageHeading} />
				<About aboutText={data.about && data.about.Body1} />
				<How steps={data && data.steps} />

				<Work projects={data.projects && data.projects.slice(0, 6)} />

				<Section
					classes='o-stories -flex -align-center -justify-center'
					data-theme='light'
				>
					<ContainerFluid>
						<Box pt={10} pb={10}>
							<Stories slides={data && data.testimonials} withFrame />
						</Box>
						<InstaPost/>
					</ContainerFluid>
				</Section>
			</div>
		</>
	);
}

export default HomePage;
