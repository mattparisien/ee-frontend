import { applyNextFetchPolicy, useQuery } from "@apollo/client";
import { Box, Typography } from "@mui/material";
import React, { useMemo } from "react";
import Marquee from "react-fast-marquee";
import NEXTPROJECT from "../../../../api/graphql/queries/GetNextProject";
import PROJECTS from "../../../../api/graphql/queries/GetProjects";
import Container from "../../../Containers/ContainerFluid";
import Section from "../../../Containers/Section";
import SplitText from "../../../HOC/SplitText";
import Link from "../../../Link/Link";
import Arrow from "../../../Vector/Arrow";
import getNextId from "../helpers/getNextId";

function Next({ color, currentProjectId, projects }) {
	const next = useMemo(() => {
		if (projects && currentProjectId) {
			const nextId = getNextId(projects, currentProjectId);
			const proj = projects.find(project => project.id === nextId);
			const { title, subtitle } = proj;

			return {
				id: nextId,
				title: title,
				subtitle: subtitle,
				slug: title.toLowerCase().split(" ").join("-"),
			};
		}
	}, [currentProjectId, projects]);

	const marqueeWords = useMemo(() => {
		if (next && next.title && next.subtitle) {
			const array = [];
			for (let i = 0; i < 10; i++) {
				array.push(i % 2 === 0 ? next.title : next.subtitle);
			}
			return array;
		}
	}, [next]);

	return (
		<>
			{next && (
				<Section
					sectionTheme={color}
					disableMarginBottom
					sx={theme => ({
						button: {
							color:
								theme.palette.primary[color === "yellow" ? "dark" : "light"],
						},
						".c-arrow_svg path": {
							stroke:
								theme.palette.primary[color === "yellow" ? "dark" : "light"],
						},
					})}
				>
					<Box
						sx={{
							".c-arrow": {
								transition: "300ms ease",
								transitionDelay: "100ms",
							},
							"&:hover .c-arrow": {
								transform: `translateX(30%)`,
							},
						}}
					>
						<Link
							classes={`-stretchX -block -stretchY -hover-underline`}
							isRouterLink
							rel={"next"}
							href={`/projects/${next.slug}`}
						>
							<Box py={20}>
								<div className='c-link_inner'>
									<Container classes='-relative -flex -align-center -justify-between'>
										<Box
											display='flex'
											justifyContent='space-between'
											alignItems='center'
											flexDirection='row-reverse'
											pb={30}
										>
											<Typography variant='h2' fontFamily={"Kobe"}>
												<SplitText>Next</SplitText>
											</Typography>

											<Arrow color='dark' />
										</Box>
									</Container>

									<Marquee gradient={false} direction={"right"}>
										{marqueeWords &&
											marqueeWords.map((word, i) => (
												<MarqueeItem text={word} key={i} />
											))}
									</Marquee>
								</div>
							</Box>
						</Link>
					</Box>
				</Section>
			)}
		</>
	);
}

function MarqueeItem({ text }) {
	return (
		<Typography variant='h1' mr={15}>
			<SplitText>{text}</SplitText>
		</Typography>
	);
}

export default Next;
