import React, { useEffect, useRef } from "react";
import SliderItem from "./SliderItem";
import $ from "jquery";
import gsap from "gsap";
import Draggable from "gsap/Draggable";


export default function Slider() {
	const ref = useRef(null);

	useEffect(() => {
		gsap.registerPlugin(Draggable);

		Draggable.create(ref.current, {
			type: "x",
			bounds: $(".slider-wrapper"),
			throwProps: true,
			onDrag: function () {
			
      

      }
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
