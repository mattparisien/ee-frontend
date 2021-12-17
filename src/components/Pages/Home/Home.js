import React, { Fragment, useRef, useEffect, useState } from "react";

import gsap from "gsap";

import Section from "../../Section";
import Container from "../../Container";
import Paragraph from "../../Paragraph";
import Heading from "../../Heading";

import DrawSVGPlugin from "gsap/DrawSVGPlugin";
import useResize from "../../../helpers/hooks/useResize";

import { useTheme } from "styled-components";
import useScroll from "../../../helpers/hooks/useScrollDir";
import UnorderedList from "../../Lists/UnorderedList";
import axios from "axios";
import { Link } from "react-router-dom";

import Image from "../../Image";
import { StyledFeaturedWork } from "../styles";
import useMouseMove from "../../../helpers/hooks/useMouseMove";
import Hero from "./components/Hero";
import About from "./components/About";
import How from "./components/How";
import FeaturedWork from "./components/FeaturedWork";


function Home(props) {
	const [data, setData] = useState([]);
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		console.log(data && data);

		const url1 = axios.get(`${process.env.REACT_APP_BASE_URL}/api/about`);
		const url2 = axios.get(
			`${process.env.REACT_APP_BASE_URL}/api/posts?fields=*&populate=*`
		);

		Promise.all([url1, url2])
			.then(values => {
				values.forEach(val => {
					if (!data[val]) {
						setData(prev => [...prev, val.data.data]);
					}
				});
			})
			.catch(err => setError(err))
			.finally(() => setLoading(false));
	}, [loading]);
	const { windowResizing } = useResize();

	const { addToRefs } = props;

	const [isScrolling, scrollDirection] = useScroll();
	const [isHovering, setHovering] = useState(false);

	const rows = useRef([]);
	const eye = useRef(null);
	const ear = useRef(null);
	const scrollCta = useRef(null);
	const amperstand = useRef(null);
	const introAnimation = useRef(gsap.timeline());
	const overlayRef = useRef(null);
	const scrollRef = useRef(null);
	const stickySection = useRef(null);
	const scalerRef = useRef(null);
	const skewContainer = useRef(null);

	const theme = useTheme();

	useEffect(() => {
		gsap.registerPlugin(DrawSVGPlugin);

		console.log(data && data);

		// introAnimation.current
		// 	.to($(eye.current).find("path"), {
		// 		drawSVG: "0%",
		// 		duration: 1,
		// 		ease: "expo.inout",
		// 		duration: 1,
		// 		stagger: 0.2,
		// 	})
		// 	.to(
		// 		$(ear.current).find("path"),
		// 		{
		// 			drawSVG: "0%",
		// 			duration: 1,
		// 			ease: "expo.inout",
		// 			duration: 1,
		// 			stagger: 0.2,
		// 		},
		// 		0.3
		// 	)
		// 	.to(
		// 		overlayRef.current,
		// 		{
		// 			x: "-100%",
		// 			duration: 2.5,
		// 			ease: "Expo.easeInOut",
		// 		},
		// 		1.4
		// 	)
		// 	.to(
		// 		amperstand.current,
		// 		{
		// 			fontSize: "50vw",
		// 			duration: 3,
		// 			ease: "Expo.easeInOut",
		// 		},
		// 		2
		// 	)
		// 	.to(
		// 		amperstand.current,
		// 		{
		// 			color: theme.colors.blue,
		// 			duration: 0.3,
		// 		},
		// 		3
		// 	)
		// 	.to(
		// 		amperstand.current,
		// 		{
		// 			color: theme.colors.red,
		// 			duration: 0.3,
		// 		},
		// 		3.1
		// 	)
		// 	.to(
		// 		amperstand.current,
		// 		{
		// 			color: theme.colors.green,
		// 			duration: 0.3,
		// 		},
		// 		3.3
		// 	)
		// 	.to(
		// 		amperstand.current,
		// 		{
		// 			color: theme.colors.yellow,
		// 			duration: 0.3,
		// 		},
		// 		3.4
		// 	)
		// 	.to(
		// 		scrollCta.current,
		// 		{
		// 			y: 0,
		// 			duration: 0.9,
		// 			ease: "Expo.easeOut",
		// 		},
		// 		2
		// 	);
	}, []);

	//Featured work titles

	return (
		<>
			<div
				ref={scrollRef}
				data-scroll-container
				className='home-page page-wrap'
				ref={addToRefs}
			>
				<Hero />
	
				<About data={data} />
				<How />
				<FeaturedWork data={data} />
			</div>
		</>
	);
}

export default Home;
