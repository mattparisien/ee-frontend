import React from "react";
import Section from "../../Containers/Section";
import ContainerFluid from "../../Containers/ContainerFluid";
import Link from "../../Link/Link";
import Arrow from "../../Vector/Arrow";
import Fade from "react-reveal/Fade";
import Marquee from "react-fast-marquee";
import { Container } from "@mui/material";

function Next({ color, nextPost }) {
	return (
		<>
			<Fade>
				<Section classes='o-next' data-theme={color}>
					<Link
						classes={`-stretchX -block -stretchY -padding-lg -hover-underline`}
						isRouterLink
						href={nextPost && `/projects/${nextPost.id}`}
					>
						<div className='c-link_inner'>
							<ContainerFluid classes='-relative -flex -align-center -justify-between'>
								<Fade bottom>
									<h2 className='o-h1 -padding-bottom-huge'>Next</h2>
								</Fade>
								<Arrow color='light' />
							</ContainerFluid>
							<Fade bottom>
								<Marquee gradient={false} direction={"right"}>
									<div className='o-h1 marquee-item'>
										{nextPost && nextPost.title}
									</div>
									<div className='o-h1 marquee-item'>
										{nextPost && nextPost.subtitle}
									</div>
									<div className='o-h1 marquee-item'>
										{nextPost && nextPost.title}
									</div>
									<div className='o-h1 marquee-item'>
										{nextPost && nextPost.subtitle}
									</div>
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
