import React, { useRef, useEffect, useState } from "react";
import $ from "jquery";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import MorphSVGPlugin from "gsap/MorphSVGPlugin";
import { setStickySection } from "../animations";

export default function Section(props) {
	gsap.registerPlugin(ScrollTrigger, MorphSVGPlugin);
	const ref = useRef(null);

	useEffect(() => {
		setStickySection("+=1000");	
	}, [])
	

	return <section className={props.classes}>{props.children}</section>;
}
