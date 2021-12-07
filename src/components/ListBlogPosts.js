import React, { useRef, useEffect } from "react";
import Grid from "./Grid";
import GridItem from "./GridItem";
import Image from "./Image";
import useAxios from "../helpers/hooks/useAxios";
import Container from "./Container";
import { Link } from "react-router-dom";
import useHover from "../helpers/hooks/useHover";
import useResize from "../helpers/hooks/useResize";
import useIntersect from "../helpers/hooks/useIntersect";
import $ from "jquery";
import gsap from "gsap";
import divideArray from "../helpers/divideArray";
import renderGridItems from "../helpers/renderGridItems";

function ListBlogPosts({ gap, padding }) {
	const gridStyle = { gap: gap && gap, width: "100%" };
	const { error, data, loading } = useAxios(
		"/api/posts?fields=*&populate=*"
	);

	useEffect(() => {
		console.log('data...', data)
	})

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
