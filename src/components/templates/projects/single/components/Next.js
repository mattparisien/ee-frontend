import { Box, Typography } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useContext, useMemo } from "react";
import convertToSlug from "../../../../../helpers/convertToSlug";
import { SingleContext } from "../../../../../pages/projects/[slug]";
import Container from "../../../../Containers/ContainerFluid";
import Section from "../../../../Containers/Section";
import { Fade } from "react-reveal";
import TextMarquee from "./TextMarquee";

function Next() {
	const router = useRouter();

	// const next = useMemo(() => {
	// 	if (projects && currentProjectId) {
	// 		const nextId = getNextId(projects, currentProjectId);
	// 		const proj = projects.find(project => project.id === nextId);
	// 		const { title, subtitle } = proj;

	// 		return {
	// 			id: nextId,
	// 			title: title,
	// 			subtitle: subtitle,
	// 			slug: subtitle.toLowerCase().split(" ").join("-"),
	// 		};
	// 	}
	// }, [currentProjectId, projects]);

	const { projects, themeColor } = useContext(SingleContext);

	const next = useMemo(() => {
		const currSlug = router.query.slug.split("-").join(" ");

		if (projects && projects.length) {
			const currentProject = projects.find(
				project => project.Subtitle.toLowerCase() === currSlug.toLowerCase()
			);

			const currIndex = projects.indexOf(currentProject);

			if (currIndex + 1 !== projects.length) {
				return projects[currIndex + 1];
			} else {
				return projects[0];
			}
		}

		return null;
	}, [projects, router]);

	const marqueeWords = useMemo(() => {
		if (next && next.Title && next.Subtitle) {
			const array = [];
			for (let i = 0; i < 10; i++) {
				array.push(i % 2 === 0 ? next.Title : next.Subtitle);
			}
			return array;
		}
	}, [next]);

	return (
		<>
			{next && (
				<Section>
					<Link
						isRouterLink
						rel={"next"}
						href={`/projects/${convertToSlug(next.Subtitle)}`}
					>
						<a
							href={`/projects/${convertToSlug(next.Subtitle)}`}
							className={`block bg-${themeColor || "yellow"}-custom `}
						>
							<Container classes='-relative -flex -align-center -justify-between'>
								<Box
									display='flex'
									justifyContent='space-between'
									alignItems='center'
									flexDirection='row-reverse'
									pb={30}
								>
									<div className='p-5 text-5xl font-adieu'>Next</div>

									{/* <Arrow color='dark' /> */}
								</Box>
								p
							</Container>
							<Fade wrapper={Box}>
								<TextMarquee direction='right' words={marqueeWords} />
							</Fade>
						</a>
					</Link>
				</Section>
			)}
		</>
	);
}

export default Next;
