export const calculateWordOffsets = (
	containerRef,
	wordRefs,
	setDefaultOffsets
) => {
	const containerWidth = containerRef.current.offsetWidth;
	const containerHeight = containerRef.current.offsetHeight;

	wordRefs.current.forEach((word, id) => {
		const wordWidth = word.offsetWidth;
		const wordHeight = word.offsetHeight;
		setDefaultOffsets(prev => ({
			...prev,
			[id]: {
				left: containerWidth / 2 - wordWidth / 2,
				top: containerHeight / 2 - wordHeight / 2,
			},
		}));
	});
};

export const animateIntro = (
	timeline,
	wordRefs,
	chars,
	logoRef,
	overlayRef
) => {
	timeline.current
		.fromTo(
			chars,
			{
				y: "100%",
			},
			{
				y: "0",
				duration: 3,
				ease: "expo.inOut",
				stagger: 0.05,
			}
		)
		.to(
			wordRefs.current[0],
			{
				left: "0",
				duration: 2,
				ease: "expo.inOut",
			},
			3
		)
		.to(
			wordRefs.current[1],
			{
				right: "0",
				duration: 2,
				ease: "expo.inOut",
			},
			3
		)
		.to(
			wordRefs.current[2],
			{
				left: "0",
				duration: 2,
				ease: "expo.inOut",
			},
			3
		)
		.to(
			overlayRef.current,
			{
				x: "110%",
				duration: 1,
				ease: "expo.inOut",
			},
			3.5
		);
};
