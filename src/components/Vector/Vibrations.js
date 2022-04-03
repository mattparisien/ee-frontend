import gsap from "gsap";
import React, { useRef } from "react";

function Vibrations() {
	// const masterTimeline = useRef(gsap.timeline());
	const masterTimelineOne = useRef(gsap.timeline({ onComplete: () => masterTimelineOne.current.restart() }));
	// const outerTimeline = useRef(gsap.timeline());
	// const innerTimeline = useRef(gsap.timeline());

	// const centerTimeline = useRef(gsap.timeline());
	const vibrationInner = useRef(null);
	const vibrationCenter = useRef(null);
	const vibrationOuter = useRef(null);

	// useEffect(() => {
	// 	const duration = 2;

	// 	const outer = () => {
	// 		outerTimeline.current
	// 			.to(vibrationOuter.current, {
	// 				x: "0",
	// 				duration: duration,
	// 				ease: "linear",
	// 			})
	// 			.to(
	// 				vibrationOuter.current,
	// 				{
	// 					opacity: 1,
	// 				},
	// 				duration / 2
	// 			)
	// 			.to(
	// 				vibrationOuter.current,
	// 				{
	// 					opacity: 0,
	// 				},
	// 				duration
	// 			)
	// 			.to(
	// 				vibrationOuter.current,
	// 				{
	// 					transformOrigin: "center",
	// 					scale: 1.5,
	// 					duration: duration,
	// 				},
	// 				0
	// 			);
	// 		return outerTimeline.current;
	// 	};

	// 	const center = () => {
	// 		centerTimeline.current
	// 			.to(vibrationCenter.current, {
	// 				x: "0",
	// 				duration: duration,
	// 				ease: "linear",
	// 			})
	// 			.to(
	// 				vibrationCenter.current,
	// 				{
	// 					opacity: 1,
	// 				},
	// 				duration / 2
	// 			)
	// 			.to(
	// 				vibrationCenter.current,
	// 				{
	// 					opacity: 0,
	// 				},
	// 				duration
	// 			)
	// 			.to(
	// 				vibrationCenter.current,
	// 				{
	// 					transformOrigin: "center",
	// 					scale: 1.5,
	// 					duration: duration,
	// 				},
	// 				0
	// 			);

	// 		return centerTimeline.current;
	// 	};

	// 	const inner = () => {
	// 		innerTimeline.current
	// 			.to(vibrationInner.current, {
	// 				x: "0",
	// 				duration: duration,
	// 				ease: "linear",
	// 			})
	// 			.to(
	// 				vibrationInner.current,
	// 				{
	// 					opacity: 1,
	// 				},
	// 				duration / 2
	// 			)
	// 			.to(
	// 				vibrationInner.current,
	// 				{
	// 					opacity: 0,
	// 				},
	// 				duration
	// 			)
	// 			.to(
	// 				vibrationInner.current,
	// 				{
	// 					transformOrigin: "center",
	// 					scale: 1.5,
	// 					duration: duration,
	// 				},
	// 				0
	// 			);
	// 		return innerTimeline.current;
	// 	};
	// 	masterTimelineOne.current
	// 		.set(vibrationInner.current, { opacity: 0 })
	// 		.set(vibrationCenter.current, { opacity: 0 })
	// 		.set(vibrationOuter.current, { opacity: 0 })
	// 		.add(outer())
	// 		.add(center(), 0.4)
	// 		.add(inner(), 0.8)
	// 		.timeScale(2);
	// }, []);

	return (
		<div className='c-vibrations'>
			<div className='c-vibrations_inner -relative -sretchX -stretchY'>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					viewBox='0 0 139.32 278.71'
					className='vibration'
				>
					<path
						d='M11.38.1c1.82 0 5.43-.24 9.01.01 41.63 2.91 70.06 26.31 91.37 59.94 16.05 25.32 26.73 53.19 27.49 83.14.5 19.51-1.75 39.98-7.54 58.52-6.21 19.86-17.5 38.26-27.66 56.7-3.77 6.84-9.8 13.16-16.25 17.6-9.21 6.34-18.13.89-17.09-10.16.72-7.64 2.87-15.47 5.98-22.5 11-24.89 18.47-51.07 17.62-77.93-1.68-53.2-15.45-101.4-66.52-130.06-8.33-4.68-16.58-10.09-23.44-16.65C-3.43 11.26-.58 3.32 11.38.1Z'
						className='vibration-outer'
						ref={vibrationOuter}
					/>
				</svg>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					viewBox='0 0 98.04 213.85'
					className='vibration'
				>
					<path
						d='M91.27 68.1c12.22 44.99 7.98 88.42-13.52 129.76-3.1 5.96-9.63 10.69-15.54 14.49-6.08 3.92-11.62-.33-10.59-7.58.8-5.65 2.36-11.2 3.81-16.74 10.02-38.04 8.05-75.7-3.53-113.06-3.76-12.12-10.5-22.16-20.31-30.35C22.34 36.9 12.9 29.23 4.86 20.35 1.5 16.63 1.52 9.82 0 4.41 5.46 2.89 11.52-.99 16.28.23c36.64 9.42 64.73 28.9 74.99 67.87Z'
						className='vibration-center'
						ref={vibrationCenter}
					/>
				</svg>
				<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 95.57 143.32'>
					<path
						d='M91.94 63.22c9.12 26.23.01 48.42-15.61 68.99-2.29 3.01-5.66 5.88-9.14 7.13-5.63 2.02-14.95 5.51-17 3.23-4.19-4.65-6.26-12.74-6.2-19.38.15-16.17 2.5-32.32 2.97-48.5.2-7.08-1.67-14.31-3.24-21.33-3.06-13.63-11.49-22.93-24.28-28.34-2.77-1.17-6.04-1.62-8.33-3.38C7.09 18.56 3.67 14.73 0 11.22 4.04 7.67 7.66 1.94 12.22 1.05c7.33-1.44 16.1-1.68 22.85 1.07C63.2 13.57 83.78 32.81 91.94 63.23Z'
						className='vibration-inner'
						ref={vibrationInner}
					/>
				</svg>
			</div>
		</div>
	);
}

export default Vibrations;
