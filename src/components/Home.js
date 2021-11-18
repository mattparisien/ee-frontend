import React, { Fragment, useRef, useEffect } from "react";
import Section from "./Section";
import { ClipPath } from "./Svg";

export default function Home() {
	return (
		<>
			<Section sticky classes={"hero-section -flex -align-end -just-center"}>
				<ClipPath />
				<div className='to-be-revealed -bg-light'>
					<h1 className='-txt-dark -xl'>Listen</h1>
				</div>
				<div className='revealer -bg-dark'>
					<div className='revealer__inner'>
						<p className='-xl -txt-light -indent'>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse omnis animi, ab facilis excepturi error, ea alias porro a laboriosam
							distinctio eaque sed numquam maiores minima dolore ipsa laudantium tempora fuga dicta odit. Nihil ullam, excepturi hic quis consequatur
							repudiandae atque magnam voluptate eius minus maxime quisquam veniam repellat neque?
						</p>
					</div>
				</div>
			</Section>
			<Section />
			<Section />
			<Section />
			<Section />
			{/* <Section classes={"vision-section -bg-dark -flex -pd-sm -absolute"}></Section> */}
		</>
	);
}
