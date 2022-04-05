import React, { useRef } from "react";
import Marquee from "react-fast-marquee";
import Fade from "react-reveal/Fade";
import ContainerFluid from "../../Containers/ContainerFluid";
import Section from "../../Containers/Section";
import Link from "../../Link/Link";
import Arrow from "../../Vector/Arrow";

function Next({ color, nextPost }) {
	const container = useRef(null);

	return (
		<>
			<Fade>
				<Section classes='o-next' data-theme={color} ref={container}>
					<Link
						classes={`-stretchX -block -stretchY -padding-lg -hover-underline`}
						isRouterLink
						href={nextPost ? `/projects/${nextPost.id}` : ""}
					>
						<div className='c-link_inner'>
							<ContainerFluid classes='-relative -flex -align-center -justify-between'>
								<Fade bottom>
									<h1 className='-padding-bottom-huge -split -fadeUpChars'>
										Next
									</h1>
								</Fade>
								<Arrow color='dark' />
							</ContainerFluid>
							<Fade bottom>
								<Marquee gradient={false} direction={"right"}>
									<h1 className=' marquee-item'>
										{nextPost && nextPost.title}
									</h1>
									<h1 className=' marquee-item'>
										{nextPost && nextPost.subtitle}
									</h1>
									<h1 className=' marquee-item'>
										{nextPost && nextPost.title}
									</h1>
									<h1 className=' marquee-item'>
										{nextPost && nextPost.subtitle}
									</h1>
								</Marquee>
							</Fade>
						</div>
					</Link>
				</Section>
			</Fade>
		</>
	);
}

export default Next;
