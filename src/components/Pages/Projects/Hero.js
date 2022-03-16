import React from "react";
import { Heading } from "../..";
import ParagraphLayout from "../../Text/ParagraphLayout";

function Hero() {
	return (
		<>
			<Heading large align="left">Projects</Heading>
			<ParagraphLayout indent indentTitle={"A New Agency"}>
				We truly believe that good work needs a dedicated team, less talking and
				more doing. Good research leads to effective design, better tech stacks
				and tailor-made outcomes. The importance of daring, innovative and
				unique projects is at the heart of our client collaboration.
			</ParagraphLayout>
		</>
	);
}

export default Hero;
