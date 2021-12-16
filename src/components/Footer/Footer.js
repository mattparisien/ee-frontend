import { useState, useEffect, useRef } from "react";
import { StyledFooter } from "../styles/StyledFooter.styled";
import Container from "../Container";
import Heading from "../Heading";
import Contact from "./Contact";
import Project from "./Project";
import Section from "../Section";
import useAxios from "../../helpers/hooks/useAxios";
import fetchNextPost from "../../helpers/fetchPostId";
import gsap from "gsap";

export default function Footer(props) {
	const footerRef = useRef(null);
	const { location, addToRefs } = props;
	const [layout, setLayout] = useState("contact");
	const q = gsap.utils.selector(footerRef.current);
		const lines = q('.line');

	// useEffect(() => {
	
	// 	console.log(lines)
	// 	gsap.fromTo(lines, {
	// 		width: 0,
	// 	}, {
	// 		width: '100%',
	// 		stagger: 0.2,
	// 		duration: 1,
	// 		ease: 'expo.inout'
	// 	})
	// }, [footerRef, lines])

	const { data, error, loading } = useAxios(null, () =>
		fetchNextPost(location)
	);

	useEffect(() => {
		setLayout(location.includes("projects/") ? "project" : "contact");
	}, [location]);



	return (
		<StyledFooter $layout={layout} ref={footerRef}>
			<Container height={"100%"} centerInner={layout === "project" && true}>
				{layout === "contact" && <Contact />}
				{layout === "project" && (
					<Project
						footerRef={footerRef}
						title={data && data.attributes.Title}
					/>
				)}
			</Container>
		</StyledFooter>
	);
}
