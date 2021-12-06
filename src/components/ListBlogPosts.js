import React, { useRef, useEffect } from "react";
import Grid from "./Grid";
import GridItem from "./GridItem";
import Paper from "@mui/material/Paper";
import Image from "./Image";
import useAxios from "../helpers/hooks/useAxios";
import Container from "./Container";
import { Link } from "react-router-dom";
import useHover from "../helpers/hooks/useHover";

function ListBlogPosts({ gap, padding }) {
	const gridStyle = { gap: gap && gap, width: "100%" };
	const { error, data, loading } = useAxios(
		"https://jsonplaceholder.typicode.com/albums/1/photos"
	);

	return (
		<Grid columns={4}>
			{data &&
				data.slice(0, 4).map((post, index) => {
					return (
						<GridItem
							classes={`project-grid__item__${index + 1}`}
							key={post.id}
						>
							<Link
								to={"/"}
								className='project-grid-item__link -position-relative'
							>
								<Image url={post.url} title={post.title} />
							</Link>
						</GridItem>
					);
				})}
		</Grid>
	);
}

export default ListBlogPosts;
