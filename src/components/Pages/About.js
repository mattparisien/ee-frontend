import React, { useRef, useEffect } from "react";
import { Section, Container, Line, Paragraph } from "../index";
import useFetch from "../../helpers/hooks/useFetch";
import { Trumpet } from "../index";
import Spinner from "../Vector/Spinner";
import useSplit from "../../helpers/hooks/useSplit";
import { useIntersection } from "../../helpers/hooks/useIntersect";
import Accent from "../../effects/Accent";
import gsap from "gsap";

function About(props) {
	const [data, error, loading] = useFetch("/api/about", {
		requestType: "textContent",
	});

	const determinedAccentType = word => {
		let nakedWord = word.replaceAll("**", "");
		return nakedWord.length <= 6
			? "rectangle"
			: nakedWord.length === 10
			? "circle"
			: "line";
	};

	const accentuate = () => {
		//Accentuates words that are marked as bold from STRAPI

		const mapEachWord = arrayOfWords => {
			const mappedWords = arrayOfWords.map((word, i) => (
				<>
					{word.includes("**") ? (
						<Accent type={determinedAccentType(word)} key={i}>
							{word.replaceAll("**", "")}
						</Accent>
					) : (
						word
					)}{" "}
				</>
			));

			return mappedWords;
		};

		let body = data && data.attributes.Body;

		let partOneWords = body.split("split")[0].split(" ");
		let partTwoWords = body.split("split")[1].split(" ");
		const result1 = mapEachWord(partOneWords);
		const result2 = mapEachWord(partTwoWords);
		let results = [result1, result2];

		return results;
	};

	const splitRef = useRef(null);
	const paragraphRefs = useRef(null);
	paragraphRefs.current = [];

	const [isSplit, chars, splitCount] = useSplit(paragraphRefs.current, {
		type: "lines",
		linesClass: "fade-up-line",
	});

	const [isIntersecting, target] = useIntersection(paragraphRefs.current, {
		threshold: 0.2,
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
				ease: "power2.out",
			});
		}

		const container = splitRef.current;
		const q = gsap.utils.selector(container);

		gsap.to(q(".fade-up-line"), {
			y: 0,
			duration: 0.8,
			stagger: 0.2,
			opacity: 1,
			ease: "power3.out",
		});
	}, [target, isSplit]);

	const content = () => (
		<>
			{data &&
				accentuate().map((text, i) => {
					return (
						<Paragraph
							size={i === 0 ? "medium" : "small"}
							fadeUp={"lines"}
							addToRefs={addToRefs}
						>
							{text}
						</Paragraph>
					);
				})}
			<Line color='white' marginTop />
			<Trumpet width={"30vw"} color={"light"} position={"absolute"} />
			<Paragraph size={"small"} addToRefs={addToRefs}></Paragraph>
		</>
	);

	return (
		<Section classes={"section-who"} bg={"dark"}>
			<Container padding='small'>
				<div className='morph-bg'>
					{loading && <Spinner />}
					{data && content()}
				</div>
			</Container>
		</Section>
	);
}

export default About;
