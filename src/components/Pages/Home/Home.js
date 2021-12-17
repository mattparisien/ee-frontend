import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import DrawSVGPlugin from "gsap/DrawSVGPlugin";
import useResize from "../../../helpers/hooks/useResize";
import { useTheme } from "styled-components";
import useScroll from "../../../helpers/hooks/useScrollDir";
import axios from "axios";
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

	const { addToRefs } = props;
	const scrollRef = useRef(null);
	

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
