import { Box } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useContext, useMemo } from "react";
import { Fade } from "react-reveal";
import convertToSlug from "../../../../../helpers/convertToSlug";
import useMouseEnter from "../../../../../helpers/hooks/useMouseEnter";
import { SingleContext } from "../../../../../pages/projects/[slug]";
import Container from "../../../../Containers/ContainerFluid";
import Section from "../../../../Containers/Section";
import Arrow from "../../../../Vector/Arrow";
import styles from "./Next.module.css";
import TextMarquee from "./TextMarquee";
import getNextProject from "./utils/getNextProject";
// import Link from "next-Link";

function Next() {
	const router = useRouter();

	const { ref, isEnter } = useMouseEnter();

	const { projects, themeColor } = useContext(SingleContext);

	const next = useMemo(() => {
		const nextProj = getNextProject(router.query.slug, projects);
		console.log("next project", nextProj);
		return nextProj;
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
					<Link href={`/projects/${convertToSlug(next.Subtitle)}`}>
						<a
							href={`/projects/${convertToSlug(next.Subtitle)}`}
							className={`${styles.NextLink} block bg-${
								themeColor || "yellow"
							}-custom py-10`}
							rel='next'
							ref={ref}
						>
							<Container classes='-relative -flex -align-center -justify-between'>
								<Box
									display='flex'
									justifyContent='space-between'
									alignItems='center'
									flexDirection='row-reverse'
									pb={30}
								>
									<div className='text-3xl font-adieu'>Next</div>
									<div
										className={`arrow-wrapper transition-transform ease duration-[400ms] ${
											isEnter ? "translate-x-10" : ""
										}`}
									>
										<Arrow />
									</div>
								</Box>
							</Container>
							<Fade wrapper={Box}>
								<TextMarquee
									direction='right'
									words={marqueeWords}
									isScaledText={isEnter}
								/>
							</Fade>
						</a>
					</Link>
				</Section>
			)}
		</>
	);
}

export default Next;
