import React, { useEffect } from "react";
import Grid from "./Grid";
import GridItem from "./GridItem";
import Paper from "@mui/material/Paper";
import Image from "./Image";
import useAxios from "../helpers/hooks/useAxios";
import Container from "./Container";

function ListBlogPosts({ gap, padding }) {
	const gridStyle = { gap: gap && gap, width: "100%" };
	const { error, data, loading } = useAxios(
		"https://jsonplaceholder.typicode.com/albums/1/photos"
	);

	let count = 0;
	
	return (
		
		<Grid columns={4}>

			{data && data.slice(0, 4).map((post, index) => {
				count++


				

				return (
					<GridItem classes={`project-grid__item__${count}`}></GridItem>
				)
			})}
		</Grid>
	);
}

export default ListBlogPosts;
