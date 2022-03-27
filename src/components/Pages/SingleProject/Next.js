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
			<Section classes='o-next' data-theme={color}>
				<ContainerFluid>
					<Link
						classes={`-stretchX -block -stretchY -padding-lg -hover-underline`}
						isRouterLink
						href={nextPost && `/projects/${nextPost.id}`}
					>
						<div className='c-link_inner'>
							<Arrow />

							<Fade bottom>
								<div className='o-next_title o-h3 -underline-label -underline-label-dark'>
									<span className='label'>{nextPost && nextPost.title}</span>
								</div>
							</Fade>
							<Fade bottom>
								<div className='o-next_subtitle o-h3 -underline -underline-dark'>
									{nextPost && nextPost.subtitle}
								</div>
							</Fade>
						</div>
					</Link>
				</ContainerFluid>
			</Section>
			<Section classes='o-next o-next_candidateç' data-theme={"dark"}>
				<Link
					classes={`-stretchX -block -stretchY -padding-lg -hover-underline`}
					isRouterLink
					href={nextPost && `/projects/${nextPost.id}`}
				>
					<div className='c-link_inner'>
						
            <ContainerFluid classes="-relative">
              <h2 className="o-h1 -padding-bottom-huge">Next</h2>
              <Arrow color="light"/>
            </ContainerFluid>
						<Marquee gradient={false}>
							<div className='o-h1 marquee-item'>{nextPost && nextPost.title}</div>
							<div className='o-h1 marquee-item'>{nextPost && nextPost.title}</div>
							<div className='o-h1 marquee-item'>{nextPost && nextPost.title}</div>
							<div className='o-h1 marquee-item'>{nextPost && nextPost.title}</div>
							<div className='o-h1 marquee-item'>{nextPost && nextPost.title}</div>
						</Marquee>

						{/* <Fade bottom>
							<div className='o-next_title o-h3 -underline-label -underline-label-dark'>
								<span className='label'>{nextPost && nextPost.title}</span>
							</div>
						</Fade>
						<Fade bottom>
							<div className='o-next_subtitle o-h3 -underline -underline-dark'>
								{nextPost && nextPost.subtitle}
							</div> */}
						{/* </Fade> */}
					</div>
				</Link>
			</Section>
		</>
	);
}

export default Next;
