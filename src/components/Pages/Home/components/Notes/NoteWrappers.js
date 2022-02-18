import React, { useRef, forwardRef, useEffect } from "react";
import { StyledNoteRotationWrapper } from "../styles";
import gsap from "gsap";
import ScrollTrigger from "gsap/src/ScrollTrigger";
import { VSMShadowMap } from "three";

function NoteWrappers({ children, id, rotation, speed, scrollTrigger }, ref) {
	const noteSpeed = speed;
	const tl = useRef(gsap.timeline());
	const rotationRefs = useRef([]);

	const addToRefs = el => {
		if (el && !rotationRefs.current.includes(el)) {
			rotationRefs.current.push(el);
		}
	};

	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger);

		if (rotationRefs.current && scrollTrigger) {
			tl.current.to(rotationRefs.current, {
				rotate: "180deg",
				duration: 2,
				scrollTrigger: {
					trigger: scrollTrigger,
					start: "top top",
					scrub: 2,
					scrub: true,
					duration: 5,
					end: "+=2000"
				},
			});
		}
	}, [rotationRefs, scrollTrigger]);

	return (
		<div
			className={`location-note-wrapper location-note-wrapper__${(id += 1)}`}
		>
			<div
				className='scroll-speed-note-wrapper'
				data-scroll
				data-scroll-speed={noteSpeed}
			>
				<StyledNoteRotationWrapper
					className='rotate-note-container'
					ref={addToRefs}
				>
					{children}
				</StyledNoteRotationWrapper>
			</div>
		</div>
	);
}

export default forwardRef(NoteWrappers);
