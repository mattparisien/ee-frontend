import { Box, Typography } from "@mui/material";
import React, { useMemo, useRef, useEffect } from "react";
import Marquee from "react-fast-marquee";
import Fade from "react-reveal/Fade";
import PROJECTS from "../../../api/graphql/queries/GetProjects";
import ContainerFluid from "../../Containers/ContainerFluid";
import Section from "../../Containers/Section";
import Link from "../../Link/Link";
import Arrow from "../../Vector/Arrow";
import { useQuery } from "@apollo/client";
import NEXTPROJECT from "../../../api/graphql/queries/GetNextProject";

function Next({ color, currentProjectId }) {
	const container = useRef(null);

	const { data, error, loading } = useQuery(PROJECTS);
	const result2 = useQuery(NEXTPROJECT, {
		skip: !data,
		variables: {
			id:
				data &&
				currentProjectId &&
				data.projects.data.length === parseInt(currentProjectId)
					? 1
					: parseInt(currentProjectId) + 1,
		},
	});

	const marqueeWords = useMemo(() => {
		if (result2.data) {
			const array = [];
			for (let i = 0; i < 10; i++) {
				array.push(
					i % 2 === 0
						? result2.data.project.data.attributes.Subtitle
						: result2.data.project.data.attributes.Title
				);
			}
			return array;
		}
	}, [result2.data]);

	return (
		<>
			<Fade>
				{result2.data && (
					<Section classes='o-next' data-theme={color} ref={container} noGutter>
						<Link
							classes={`-stretchX -block -stretchY -padding-lg -hover-underline`}
							isRouterLink
							href={`/projects/${result2.data.project.data.id}`}
						>
							<div className='c-link_inner'>
								<ContainerFluid classes='-relative -flex -align-center -justify-between'>
									<Box
										display='flex'
										justifyContent='space-between'
										alignItems='center'
										flexDirection='row-reverse'
									>
										<Fade bottom>
											<Typography variant='h2' className=' -split -fadeUpChars'>
												Next
											</Typography>
										</Fade>
										<Arrow color='dark' />
									</Box>
								</ContainerFluid>
								<Fade bottom>
									<Marquee gradient={false} direction={"right"}>
										{marqueeWords &&
											marqueeWords.map(word => <MarqueeItem text={word} />)}
									</Marquee>
								</Fade>
							</div>
						</Link>
					</Section>
				)}
			</Fade>
		</>
	);
}

function MarqueeItem({ text }) {
	return <Typography variant='h2' mr={5}>{text}</Typography>;
}

export default Next;
