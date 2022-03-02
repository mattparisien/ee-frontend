import React from "react";
import { NoteFilled, NoteOutline } from "../../../../Vector/Svg";
import NoteWrappers from "./NoteWrappers";

function Notes({ addToRefs, scrollTrigger }) {
	const notes = ["filled", "filled", "outline", "outline", "outline", "filled"];
	let noteSpeed = 3;

	return notes.map((note, i) => {
		return (
			<NoteWrappers
				key={i}
				id={i}
				ref={addToRefs}
				speed={noteSpeed}
				scrollTrigger={scrollTrigger}
			>
				{note === "filled" ? <NoteFilled /> : <NoteOutline />}
			</NoteWrappers>
		);
	});
}

export default Notes;
