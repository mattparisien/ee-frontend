import React, { useEffect, useRef } from "react";
import SliderItem from "./SliderItem";
import $ from "jquery";
import gsap from "gsap";
import Draggable from "gsap/Draggable";

import InertiaPlugin from "gsap/InertiaPlugin";

export default function Slider(props) {
	gsap.registerPlugin(Draggable, InertiaPlugin);

	const ref = useRef(null);

	const { hoverState, setHoverState } = props;

	useEffect(() => {
		const onDragTransform = function () {
			gsap.to($(".slider-item"), {
				scale: 0.8,
				duration: 1,
				ease: "expo.out",
			});
		};

		const dragEndRevert = function () {
			gsap.to($(".slider-item"), {
				scale: 1,
				duration: 1,
				ease: "expo.out",
				skewX: 0,
			});
		};

		Draggable.create(ref.current, {
			bounds: $(".slider-wrapper"),
			type: "x",
			inertia: true,
			onDragStart: function () {
				onDragTransform();
			},
			onDragEnd: function () {
				dragEndRevert();
			},
		});
	}, []);

	return (
		<div className='slider-wrapper'>
			<div ref={ref} className='slider-inner'>
				<SliderItem />
				<SliderItem />
				<SliderItem />
				<SliderItem />
			</div>
		</div>
	);
}
