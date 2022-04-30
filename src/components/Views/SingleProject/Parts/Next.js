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
import TextMarquee from "./TextMarquee";

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
				slug: subtitle.toLowerCase().split(" ").join("-"),
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
						sx={theme => ({
							".c-arrow": {
								transition: "300ms ease",
								transitionDelay: "100ms",
								width: "6rem",
								[theme.breakpoints.up("sm")]: {
									width: "8rem",
								},
							},
							"@media (hover: hover)": {
								"&:hover .c-arrow": {
									transform: `translateX(30%)`,
								},
							},
						})}
					>
						<Link
							classes={`-stretchX -block -stretchY -hover-underline`}
							isRouterLink
							rel={"next"}
							href={`/projects/${next.slug}`}
						>
							<Box
								sx={theme => ({
									padding: `${theme.spacing(10)} 0`,
									[theme.breakpoints.up("sm")]: {
										padding: `${theme.spacing(15)} 0`,
									},
									[theme.breakpoints.up("md")]: {
										padding: `${theme.spacing(20)} 0`,
									},
								})}
							>
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
												Next
											</Typography>

											<Arrow color='dark' />
										</Box>
									</Container>

									<TextMarquee direction='right' words={marqueeWords} />
								</div>
							</Box>
						</Link>
					</Box>
				</Section>
			)}
		</>
	);
}

export default Next;