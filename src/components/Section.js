import React, { useRef, useEffect, useState } from "react";
import $ from "jquery";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import MorphSVGPlugin from "gsap/MorphSVGPlugin";
import { setStickySection } from "../animations";
import classNames from "classnames";

export default function Section(props) {


	const sectionClass = classNames("c-section", props.classes)

	return <section className={sectionClass} data-scroll-section>{props.children}</section>;
}
