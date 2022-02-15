import React from "react";
import { NoteFilled, NoteOutline } from "../../../Vector/Svg";
import useScroll from "../../../../helpers/hooks/useScrollDir";
import { useEffect, useState, useContext } from "react";
import { StyledNoteRotationWrapper } from "./styles";
import $ from "jquery";
import ScrollContext from "../../../../App";
import { Scroll } from "react-locomotive-scroll";

function Notes() {
	const scroller = useContext(ScrollContext);

	const speed = 4;

	const [rotation, setRotation] = useState(0);

	useEffect(() => {
		console.log(scroller);
	});

	return (
		<>
			<div className='location-note-wrapper location-note-wrapper__1'>
				<div
					data-scroll
					data-scroll-speed='4'
					className='scroll-note-container'
				>
					<StyledNoteRotationWrapper
						rotationDegree={rotation}
						className='rotate-note-container'
					>
						<NoteFilled />
					</StyledNoteRotationWrapper>
				</div>
			</div>
			<div className='location-note-wrapper location-note-wrapper__2'>
				<div
					data-scroll
					data-scroll-speed='4'
					className='scroll-note-container'
				>
					<StyledNoteRotationWrapper className='rotate-note-container'>
						<NoteFilled />
					</StyledNoteRotationWrapper>
				</div>
			</div>
			<div className='location-note-wrapper location-note-wrapper__3'>
				<div
					data-scroll
					data-scroll-speed='4'
					className='scroll-note-container'
				>
					<StyledNoteRotationWrapper className='rotate-note-container'>
						<NoteOutline />
					</StyledNoteRotationWrapper>
				</div>
			</div>
			<div className='location-note-wrapper location-note-wrapper__4'>
				<div
					data-scroll
					data-scroll-speed='4'
					className='scroll-note-container'
				>
					<StyledNoteRotationWrapper className='rotate-note-container'>
						<NoteOutline />
					</StyledNoteRotationWrapper>
				</div>
			</div>
		</>
	);
}

export default Notes;
