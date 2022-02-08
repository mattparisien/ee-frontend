import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import DrawSVGPlugin from "gsap/DrawSVGPlugin";
import useResize from "../../../helpers/hooks/useResize";
import { useTheme } from "styled-components";
import useScroll from "../../../helpers/hooks/useScrollDir";
import Hero from "./components/Hero";
import About from "../About";
import How from "./components/How";
import FeaturedWork from "./components/FeaturedWork";
import useFetch from "../../../helpers/hooks/useFetch";

function Home(props) {
	const { addToRefs } = props;
	const scrollRef = useRef(null);


	//Featured work titles

	return (
		<>
			<Hero />
			<About />
			<How />
			{/* <FeaturedWork /> */}
		</>
	);
}

export default Home;
