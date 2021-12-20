import { useState, useEffect, useRef } from "react";
import { StyledFooter } from "./styles";
import { Container, Svg } from "../index";
import Contact from "./Contact";
import Project from "./Project";
import fetchNextPost from "../../helpers/fetchPostId";
import gsap from "gsap";
import NavList from "./NavList";
import { navigation } from "../../data/data";
import { Link } from "react-router-dom";
import useFetch from "../../helpers/hooks/useFetch";

export default function Footer(props) {
	const footerRef = useRef(null);
	const { location, addToRefs } = props;
	const [layout, setLayout] = useState("contact");
	const q = gsap.utils.selector(footerRef.current);
	const lines = q(".line");

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

	const nextPostId = parseInt(location.split("projects/")[1]) + 1;

	const [data, error, loading] = useFetch(`/api/posts/${nextPostId}`, {
		requestType: "nextPost",
	});

	useEffect(() => {
		console.log(data && data)
		setLayout(location.includes("projects/") ? "project" : "contact");
	}, [location, data]);

	const navLinks = navigation.map(listItem => (
		<li key={listItem.id}>
			<Link to={listItem.path}>{listItem.title}</Link>
		</li>
	));

	return (
		<StyledFooter $layout={layout} ref={footerRef}>
			<Container height={"100%"} centerInner={layout === "project" && true}>
				{layout === "contact" && <Contact />}
				{layout === "project" && (
					<Project footerRef={footerRef} title={data && data.title} />
				)}

				<NavList links={navLinks} />
			</Container>
		</StyledFooter>
	);
}
