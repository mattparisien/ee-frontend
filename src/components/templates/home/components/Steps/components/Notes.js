import React from "react";
import { DoubleNote, HalfNote, QuarterNote } from "../../../../../Vector/Notes";
import { useEffect } from "react";
import styles from "./Notes.module.css";

function Notes() {
	useEffect(() => {
		const notes = document.querySelectorAll(".c-note");

		if (window !== "undefined") {
			[...notes].forEach(note => {
				const { direction } = note.dataset;

				window.addEventListener("scroll", e => {
					const { top } = note.getBoundingClientRect();
					const scrollPos = e.scrollY;

					const rotate = top / scrollPos;
					note.style.transform = `rotate(${
						direction === "left" ? -Math.abs(rotate * 100) : rotate * 100
					}deg)`;
				});
			});
		}
	}, []);

	return (
		<>
			<div className={`${styles.Notes} absolute top-0 left-0 w-full h-full`}>
				<div className="w-full h-full relative">
					<QuarterNote id={1} data-direction='right' classes="absolute lg:top-[120px] lg:left-[100px] fill-yellow-custom" />
					<DoubleNote id={2} data-direction='left' classes="absolute  lg:top-[400px] lg:left-[400px] fill-yellow-custom"/>
					<HalfNote id={3} data-direction='right' classes="absolute  lg:top-[600px] lg:left-[680px] fill-yellow-custom"/>
					<DoubleNote id={4} data-direction='right' classes="absolute  fill-yellow-custom"/>
					<QuarterNote id={5} data-direction='left' classes="absolute bottom-[20vw] sm:left-[21vw] sm:bottom-[10vw] lg:bottom-[9vw] lg:left-[6vw] fill-yellow-custom"/>
				</div>
			</div>
		</>
	);
}

export default Notes;
