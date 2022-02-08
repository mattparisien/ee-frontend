import React, { useRef, useEffect } from "react";
// import useIntersect from "../helpers/hooks/useIntersect";
import gsap from "gsap";
import renderGridItems from "./Grid/helpers/renderGridItems";
import useFetch from "../helpers/hooks/useFetch";
import Spinner from "./Vector/Spinner";

function ListBlogPosts({ gap, padding }) {
	const [data, error, loading] = useFetch("/api/posts?fields=*&populate=*", {
		requestType: "upload",
	});

	const gridItemRefs = useRef(null);
	const imageRefs = useRef(null);
	gridItemRefs.current = [];
	imageRefs.current = [];

	return (
		<>
			{data && renderGridItems(data)}
			{loading && <Spinner />}
		</>
	);
}

export default ListBlogPosts;
