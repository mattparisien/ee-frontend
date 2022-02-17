import React, { useRef, forwardRef } from "react";
import { StyledNoteRotationWrapper } from "../styles";

function NoteWrappers({ children, id, rotation }, ref) {
	const noteSpeed = 3;

	return (
		<div
			className={`location-note-wrapper location-note-wrapper__${(id += 1)}`}
		>
			<div
				className='scroll-speed-note-wrapper'
				data-scroll
				data-scroll-speed={noteSpeed}
			>
				<StyledNoteRotationWrapper className='rotate-note-container' ref={ref}>
					{children}
				</StyledNoteRotationWrapper>
			</div>
		</div>
	);
}

export default forwardRef(NoteWrappers);
