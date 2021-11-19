import React, { Fragment, useRef, useEffect } from "react";
import $ from "jquery";
import Section from "../Section";
import { BlobTwo, ClipPath } from "../Svg";
import introAnimation from "../../intro";
import Slider from "../Slider";

export default function Home(props) {

	const { hoverState, setHoverState } = props;

	useEffect(() => {
		if ($(window).scrollTop() <= 0) {
			introAnimation();
		}
		
	}, []);

	return (
		<>
			<Section sticky classes={"hero-section -flex -align-end -just-center -bg-yellow"}>
				<ClipPath />
				<div className='to-be-revealed hero-heading -bg-dark'>
					<h1 className='-txt-dark -xl'>Listen</h1>
				</div>
				<div className='revealer -bg-dark'>
					<div className='revealer__inner'>
						<div className='section-heading-indent-text -txt-xs'>Vision</div>
						<p className='-xl -txt-light -indent'>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse omnis animi, ab facilis excepturi error, ea alias porro a laboriosam
							distinctio eaque sed numquam maiores minima dolore ipsa laudantium tempora fuga dicta odit. Nihil ullam, excepturi hic quis consequatur
							repudiandae atque magnam voluptate eius minus maxime quisquam veniam repellat neque?
						</p>
					</div>
				</div>
			</Section>
			<Section classes='vision-section -bg-red' />
			<Section classes='featured-work-section -bg-yellow -flex -flex-center -sticky'>
				<Slider  hoverState={hoverState} setHoverState={setHoverState}/>
			</Section>
			<Section />
			<Section />
			{/* <Section classes={"vision-section -bg-dark -flex -pd-sm -absolute"}></Section> */}
		</>
	);
}
