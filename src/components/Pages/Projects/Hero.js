import React from "react";
import ParagraphLayout from "../../Text/ParagraphLayout";
import HeadingSection from "../../Containers/HeadingSection";
import { Heading } from "../..";

function Hero() {
	return (
		<>
			<Heading large>hey!</Heading>
			<ParagraphLayout>
				We truly believe that good work needs a dedicated team, less talking and
				more doing. Good research leads to effective design, better tech stacks
				and tailor-made outcomes. The importance of daring, innovative and
				unique projects is at the heart of our client collaboration.
			</ParagraphLayout>
		</>
	);
}

export default Hero;
