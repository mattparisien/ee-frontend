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

	useEffect(() => {
		if ($(window).scrollTop() <= 0) {
			introAnimation();
		}
	}, []);

	const visionCopy =
		"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

	const sectionThemes = {
		sectionOne: "banana",
		sectionTwo: "night",
		sectionThree: "banana",
		sectionFour: "banana",
	};

	return (
		<>
			<ViewportWrapper>
				<Container>
					<Sticky
						visionCopy={visionCopy}
						themes={{
							revealer: sectionThemes.sectionOne,
							revealed: sectionThemes.sectionTwo,
						}}
					/>
				</Container>
			</ViewportWrapper>
			<ViewportWrapper>
				<Container sectionTheme={sectionThemes.sectionThree}></Container>
			</ViewportWrapper>
			<ViewportWrapper>
				{" "}
				<Container sectionTheme={sectionThemes.sectionThree}></Container>{" "}
			</ViewportWrapper>
		</>
	);
}
