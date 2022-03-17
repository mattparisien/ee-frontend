import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import $ from "jquery";

function TransitionCard({ transitioning }) {
	const tl = useRef(gsap.timeline());
	const [firstRender, setFirstRender] = useState(true);
	const bg = useRef(null);
	const container = useRef(null);

	useEffect(() => {
		if (transitioning) {
			tl.current.set(container.current, { display: "flex" });
			tl.current
				.to(bg.current, {
					scaleY: 1,
					duration: 2,
					ease: "expo.inOut",
				})
				.to(
					$(container.current).find(".c-char"),
					{
						y: 0,
						opacity: 1,
						ease: "expo.inOut",
						stagger: 0.03,
						duration: 1.8,
					},
					0.3
				)
				.to(
					$(container.current).find(".c-char"),
					{
						y: "-100%",
						opacity: 0,
						ease: "expo.inOut",
						stagger: 0.04,
						duration: 2,
					},
					2.4
				)
				.to(
					bg.current,
					{
						scaleY: 0,
						duration: 2,
						ease: "expo.inOut",
					},
					2.8
				)
				.set(container.current, { clearProps: "all" })
				.set(bg.current, { clearProps: "all" })
				.set($(container.current).find(".c-char"), { clearProps: "all" });
		}
	}, [transitioning]);

	return (
		<div className='c-transition-card' ref={container}>
			<h2 className='o-h2 -split -uppercase'>Social Impact</h2>
			<div className='c-transition-card_bg' ref={bg}></div>
		</div>
	);
}

export default TransitionCard;
