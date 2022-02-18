import React, { useRef, useEffect, useState } from "react";
import { NoteFilled, NoteOutline } from "../../../../Vector/Svg";
import useScroll from "../../../../../helpers/hooks/useScrollDir";

import { StyledNoteRotationWrapper } from "../styles";
import $ from "jquery";
import ScrollContext from "../../../../../App";
import { useLocomotiveScroll } from "react-locomotive-scroll";
import NoteWrappers from "./NoteWrappers";
import ScrollTrigger from "gsap/ScrollTrigger";
import gsap from "gsap";

function Notes({addToRefs}) {
	const notes = ["filled", "filled", "outline", "outline"];
	let noteSpeed = 3;

	return notes.map((note, i) => {
		return (
			<NoteWrappers key={i} id={i} ref={addToRefs} speed={noteSpeed+=1}>
				{note === "filled" ? <NoteFilled /> : <NoteOutline />}
			</NoteWrappers>
		);
	});
}

export default Notes;
