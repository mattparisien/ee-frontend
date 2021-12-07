import React, { useRef, useEffect } from "react";
import Grid from "./Grid";
import GridItem from "./GridItem";
import Paper from "@mui/material/Paper";
import Image from "./Image";
import useAxios from "../helpers/hooks/useAxios";
import Container from "./Container";
import { Link } from "react-router-dom";
import useHover from "../helpers/hooks/useHover";
import useResize from "../helpers/hooks/useResize";
import useIntersect from "../helpers/hooks/useIntersect";
import $ from "jquery";
import gsap from "gsap";

function ListBlogPosts({ gap, padding }) {
	const gridStyle = { gap: gap && gap, width: "100%" };
	const { error, data, loading } = useAxios(
		"https://jsonplaceholder.typicode.com/albums/1/photos"
	);

	const gridItemRefs = useRef(null);
	gridItemRefs.current = [];

	const getRefs = function (el) {
		if (el && !gridItemRefs.current.includes(el)) {
			gridItemRefs.current.push(el);
		}
		console.log(gridItemRefs.current);
	};

	const [isIntersect, target] = useIntersect(gridItemRefs);

	useEffect(() => {
		if (target) {
			gsap.to(target, {
				opacity: 1,
				y: "0",
				duration: 1,
				ease: "Expo.easeOut",
			});
		}
	}, [target]);

	return (
		<>
			<Grid columns={12} gap={"4vw"}>
				{data &&
					data.slice(0, 10).map((post, index) => {
						return (
							<GridItem
								classes={`project-grid__item project-grid__item__${index + 1}`}
								key={post.id}
								
							>
								<Link
									to={`/projects/${post.id}`}
									className='project-grid-item__link 	fade-up -position-relative'
									ref={getRefs}
								>
									<Image url={post.url} title={post.title} />
								</Link>
							</GridItem>
						);
					})}
			</Grid>
		</>
	);
}

export default ListBlogPosts;
