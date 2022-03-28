import React, { useEffect, useRef, useContext } from "react";
import Figure from "../Figure/Figure";
import gsap from "gsap";
import Draggable from "gsap/Draggable";
import VelocityTracker from "gsap/utils/VelocityTracker";
import { CursorContext } from "../../App";
import $ from "jquery";

function Slider({ items }) {
	gsap.registerPlugin(Draggable, VelocityTracker);
	const draggable = useRef(null);
	const container = useRef(null);
	const slider = useRef(null);
	const { setCursorState } = useContext(CursorContext);

	useEffect(() => {
		// let pressedTo;
		const tracker = VelocityTracker.track(slider.current, "x");
		const direction = draggable.current && draggable.current[0].getDirection();

		draggable.current = Draggable.create(slider.current, {
			edgeResistance: 1,
			dragResistance: 0.4,
			type: "x",
			autoScroll: 1,
			bounds: container.current,
			inertia: true,
			throwProps: true,

			onPress: e =>
				gsap.to(slider.current, {
					scale: 0.9,
					ease: "power3.out",
					duration: 1,
				}),
			onRelease: () =>
				gsap.to(slider.current, { scale: 1, ease: "power3.out", duration: 1 }),
		});
	}, []);

	// const handleMouseEnter = () => {
	// 	console.log('hello!')
	// 	setCursorState("drag");
	// };
	// const handleMouseLeave = () => {
	// 	setCursorState("normal");
	// };

	return (
		<div className='o-slider -relative' ref={container}>
			<div
				className='o-slider_inner'
				ref={slider}
				// onMouseEnter={handleMouseEnter}
				// onMouseLeave={handleMouseLeave}
			>
				{items &&
					items.map((item, i) => (
						<SliderItem
							key={i}
							title={item.title}
							subtitle={item.subtitle}
							src={item.media.featureImage.url}
						/>
					))}
			</div>
		</div>
	);
}

function SliderItem({ title, subtitle, src, alt }) {
	return (
		<a className='o-slider_item -hover-frame' href='#'>
			<div className='o-slider_image'>
				<Figure src={src} hoverEffect='frame' />
			</div>
		</a>
	);
}

export default Slider;
