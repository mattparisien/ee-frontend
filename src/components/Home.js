import React, { Fragment, useRef, useEffect } from "react";

export default function Home() {
	
	const boxRef = useRef();

	return (
		<>
			<section data-scroll-section className='home-intro-wrapper -bg-dark  -big'>
				<h1 ref={(boxRef)} className={"fade-up-rows"}>
					Eyes & Ears is an agency connecting artists to non-profit organizations, to generate social change.
				</h1>
			</section>
			<div className="hero-visual-wrapper" data-scroll-section data-scroll-speed="-3">
				<div className="hero-visual"></div>
			</div>
			<section data-scroll-section className='o-wrapper home-vision -bg-light -flex -flex-center'>
				<p className='-pg-md fade-up-rows section-heading'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Et vero asperiores autem eveniet. Porro labore explicabo, iure facere repellat
					eveniet, eum tenetur quos sapiente veritatis accusamus id. Nam totam amet illo, consequatur aperiam, nulla vel deleniti esse dolorum sint
					eius voluptatem iste! Inventore odio nemo dolorum fuga quas ipsam tenetur.
				</p>
			</section>
			<section data-scroll-section className='home-philosophy-wrapper'></section>
			<section data-scroll-section className='home-marquee-wrapper'></section>
			<section data-scroll-section className='home-featured-work-wrapper -bg-light'></section>
		</>
	);
}
