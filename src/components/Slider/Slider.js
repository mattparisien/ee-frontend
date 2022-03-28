import React, { useEffect, useRef } from "react";
import Figure from "../Figure/Figure";
import gsap from "gsap";
import Draggable from "gsap/Draggable";

function Slider({ items }) {
	gsap.registerPlugin(Draggable);
	const draggable = useRef(null);
	const container = useRef(null);
	const slider = useRef(null);

	useEffect(() => {
		draggable.current = Draggable.create(slider.current, {
			edgeResistance: 1,
			dragResistance: 0.4,
			type: "x",
			bounds: container.current,
			inertia: true,
			throwProps: true,
			onPress: () =>
				gsap.to(slider.current, {
					scale: 0.9,
					ease: "power3.out",
					duration: 1,
				}),
			onRelease: () =>
				gsap.to(slider.current, { scale: 1, ease: "power3.out", duration: 1 }),
		});
	}, []);

	return (
		<div className='o-slider -relative' ref={container}>
			<div className='o-slider_inner' ref={slider}>
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
		<div className='o-slider_item'>
			<div className='o-slider_image'>
				<Figure src={src} noFrame />
			</div>
		</div>
	);
}

export default Slider;
