import React from "react";
import { NoteFilled, NoteOutline } from "../../../Vector/Svg";
import useScroll from "../../../../helpers/hooks/useScrollDir";
import { useEffect } from "react";

function Notes() {
	const speed = 4;

	const [isScrolling, scrollDirection] = useScroll();

	useEffect(() => {
		if (isScrolling) {
			console.log("hi");
		}
	}, [isScrolling]);

	return (
		<>
			<div className='location-note-wrapper location-note-wrapper__1'>
				<div
					data-scroll
					data-scroll-speed='4'
					className='scroll-note-container'
				>
					<div className='rotate-note-container'>
						<NoteFilled />
					</div>
				</div>
			</div>
			<div className='location-note-wrapper location-note-wrapper__2'>
				<div
					data-scroll
					data-scroll-speed='4'
					className='scroll-note-container'
				>
					<div className='rotate-note-container'>
						<NoteFilled />
					</div>
				</div>
			</div>
			<div className='location-note-wrapper location-note-wrapper__3'>
				<div
					data-scroll
					data-scroll-speed='4'
					className='scroll-note-container'
				>
					<div className='rotate-note-container'>
						<NoteOutline />
					</div>
				</div>
			</div>
			<div className='location-note-wrapper location-note-wrapper__4'>
				<div
					data-scroll
					data-scroll-speed='4'
					className='scroll-note-container'
				>
					<div className='rotate-note-container'>
						<NoteOutline />
					</div>
				</div>
			</div>
		</>
	);
}

export default Notes;
