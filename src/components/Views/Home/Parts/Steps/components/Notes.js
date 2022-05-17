import React from "react";
import {
	DoubleNote,
	HalfNote, QuarterNote
} from "../../../../../Vector/Notes";

function Notes() {


	useEffect(() => {
		const notes = document.querySelectorAll(".c-note");

		if (scroll && scroll.scroll) {
			[...notes].forEach(note => {
				const { direction } = note.dataset;

				scroll.scroll.on("scroll", e => {
					const { top } = note.getBoundingClientRect();
					const scrollPos = e.scroll.y;

					const rotate = top / scrollPos;
					note.style.transform = `rotate(${
						direction === "left" ? -Math.abs(rotate * 100) : rotate * 100
					}deg)`;
				});
			});
		}
	}, [scroll]);


	return (
		<>
			<QuarterNote id={1} data-direction='right' />
			<DoubleNote id={2} data-direction='left' />
			<HalfNote id={3} data-direction='right' />
			<DoubleNote id={4} data-direction='right' />
			<QuarterNote id={5} data-direction='left' />
		</>
	);
}

export default Notes;
