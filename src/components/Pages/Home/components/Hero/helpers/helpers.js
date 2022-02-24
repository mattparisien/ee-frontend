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
