import { ConstructionOutlined } from "@mui/icons-material";

const animateNotes = (scroller, elements) => {
	const { top, bottom, height } = elements.container.getBoundingClientRect();
	const windowHeight = window.innerHeight;

	if (scroller.isReady) {
		const scale = 0;

		scroller.scroll.on("scroll", e => {
			if (e.scroll.y > top - windowHeight && e.scroll.y < bottom) {
				console.log(bottom, e.scroll.y);

				const scaler = e.scroll.y / (height - windowHeight) / 3;
				const rotater = (e.scroll.y / (height - windowHeight)) * 50;

				elements.notes.each((i, el) => {
					el.style.transform = `scale(${scaler}) rotate(${
						i % 2 === 0 ? rotater : -rotater
					}deg)`;
				});
			}
		});
	}
};

export default animateNotes;
