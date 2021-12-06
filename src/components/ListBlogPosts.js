import React, { useEffect } from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Image from "./Image";
import useAxios from "../helpers/hooks/useAxios";

function ListBlogPosts({ gap, padding }) {
	const gridStyle = { gap: gap && gap, width: "100%" };
	const { error, data, loading } = useAxios(
		"https://jsonplaceholder.typicode.com/albums/1/photos"
	);

	return (
		<Grid container spacing={3}>
			{error && error}
			{loading && "Loading..."}
			{data &&
				data.map(post => {
					return (
						<Grid item xs={6} md={6} lg={6} key={post.id}>
							<Image url={post.url} />
						</Grid>
					);
				})}
		</Grid>
	);
}

export default ListBlogPosts;
