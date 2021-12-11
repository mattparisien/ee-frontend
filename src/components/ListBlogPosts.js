import React, { useRef, useEffect } from "react";
import useAxios from "../helpers/hooks/useAxios";
import useIntersect from "../helpers/hooks/useIntersect";
import gsap from "gsap";
import renderGridItems from "../helpers/renderGridItems";

function ListBlogPosts({ gap, padding }) {
	const { error, data, loading } = useAxios("/api/posts?fields=*&populate=*");

	const gridItemRefs = useRef(null);
	const imageRefs = useRef(null);
	gridItemRefs.current = [];
	imageRefs.current = [];

	return (
		<>
			{data && renderGridItems(data)}
			{error && <p>{error}</p>}
			{loading && <p>Loading...</p>}
		</>
	);
}

export default ListBlogPosts;
