import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import DrawSVGPlugin from "gsap/DrawSVGPlugin";
import useResize from "../../../helpers/hooks/useResize";
import { useTheme } from "styled-components";
import useScroll from "../../../helpers/hooks/useScrollDir";
import Hero from "./components/Hero";
import About from "./components/About";
import How from "./components/How";
import { useContext } from "react";
import { DataContext } from "../../../App";
import FeaturedWork from "./components/FeaturedWork";

function Home(props) {
	const { addToRefs } = props;
	const scrollRef = useRef(null);

	//Featured work titles

	return (
		<>
			<Hero />
			<About />
			<How />
			<FeaturedWork />
		</>
	);
}

export default Home;
