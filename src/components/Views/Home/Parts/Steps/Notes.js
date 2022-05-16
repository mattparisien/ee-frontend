import { motion } from "framer-motion";
import React from "react";
import { useInView } from "react-intersection-observer";
import { QuarterNote, DoubleNote, HalfNote, WholeNote } from "../../../../Vector/Notes";

function Notes() {
	return (
		<>
			<QuarterNote id={1} data-direction="right"/>
			<DoubleNote id={2} data-direction="left" />
			<HalfNote id={3} data-direction="right"/>
			<DoubleNote id={4} data-direction="right"/>
			<QuarterNote id={5} data-direction="left"/>
		</>
	);
}

export default Notes;
