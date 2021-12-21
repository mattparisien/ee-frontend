import React, { useRef, useEffect } from "react";
import { Section, Container, Line, Paragraph } from "../index";
import useFetch from "../../helpers/hooks/useFetch";
import { Trumpet } from "../index";
import Spinner from "../Vector/Spinner";
import useSplit from "../../helpers/hooks/useSplit";
import gsap from "gsap";
import useAppData from "../../helpers/hooks/useAppData";
import { useIntersection } from "../../helpers/hooks/useIntersect";

function About(props) {
	const [data, error, loading] = useFetch("/api/about", {
		requestType: "textContent",
	});

	const splitRef = useRef(null);
	const paragraphRefs = useRef(null);
	paragraphRefs.current = [];

	const [isSplit, chars, splitCount] = useSplit(paragraphRefs.current, {
		type: "lines",
		linesClass: "fade-up-line",
	});

	const [isIntersecting, target] = useIntersection(paragraphRefs.current, {
		threshold: 0.8,
		rootMargin: "0px",
	});

	const addToRefs = el => {
		if (paragraphRefs.current && !paragraphRefs.current.includes(el)) {
			el !== null && paragraphRefs.current.push(el);
		}
	};

	useEffect(() => {
		if (isIntersecting && paragraphRefs.current.includes(target)) {
			const q = gsap.utils.selector(target);
			gsap.to(q(".fade-up-line"), {
				y: 0,
				duration: 0.8,
				stagger: 0.1,
				opacity: 1,
				ease: 'power2.out'
			});
		}

		const container = splitRef.current;
		const q = gsap.utils.selector(container);

		gsap.to(q(".fade-up-line"), {
			y: 0,
			duration: 0.5,
			stagger: 0.1,
			opacity: 1,
		});
	}, [isSplit, splitCount, target]);

	const content = () => (
		<>
			<Paragraph
				size={"medium"}
				indent
				indentTitle={"Agency"}
				fadeUp={"lines"}
				addToRefs={addToRefs}
			>
				{data.attributes.Body.split("split")[0]}
			</Paragraph>
			<Line color='white' marginTop />
			<Trumpet width={"30vw"} color={"light"} position={"absolute"} />
			<Paragraph
				size={"small"}
				indent
				indentTitle={"About"}
				addToRefs={addToRefs}
			>
				{data && data.attributes.Body.split("split")[1]}
			</Paragraph>
		</>
	);

	return (
		<Section classes={"section-who"} bg={"dark"}>
			<Container bg={"dark"}>
				{loading && <Spinner />}
				{data && content()}
			</Container>
		</Section>
	);
}

export default About;
