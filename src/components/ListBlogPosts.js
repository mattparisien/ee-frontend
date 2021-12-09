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

	// const getItemRefs = function (el) {
	// 	if (el && !gridItemRefs.current.includes(el)) {
	// 		gridItemRefs.current.push(el);
	// 	}
	// };

	const [isIntersect, target] = useIntersect(gridItemRefs);

	useEffect(() => {
		if (target) {
			const tl = gsap.timeline();
			tl.to(target, {
				opacity: 1,
				y: "0",
				duration: 1,
				ease: "Expo.easeOut",
			});
		}
	}, [target]);

	return (
		<>
			{data && renderGridItems(data)}
			{error && <p>{error}</p>}
			{loading && <p>Loading...</p>}
		</>
	);
}

export default ListBlogPosts;
