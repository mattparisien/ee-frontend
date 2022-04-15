import { ConstructionOutlined } from "@mui/icons-material";
import $ from "jquery";

const animateNotes = (scroller, elements) => {
	const containerHeight = $(elements.container).height();
	const windowHeight = window.innerHeight;

	console.log("this should only geet called once!");

	const handleIntersection = entries => {
		entries.forEach(note => {
			if (note.isIntersecting) {
				animateNote(note.target, scroller, windowHeight);
			}
		});
	};

	const observer = new IntersectionObserver(handleIntersection);

	$(elements.notes).each((i, el) => observer.observe(el));

	// if (scroller.isReady) {
	// 	scroller.scroll.on("scroll", e => {
	// 		const isInView = e.scroll.y > top - windowHeight && e.scroll.y < bottom;

	// 		if (isInView) {
	// 			const scale = e.scroll.y / (height - windowHeight) / 1.2;
	// 			const rotate = (e.scroll.y / (height - windowHeight)) * 50;

	// 			elements.notes.each((i, el) => {
	// 				const dir = el.dataset.direction;
	// 				const initialPos = el.dataset.initial;
	// 				//Set intial pos
	// 				el.style.transform = `rotate(${initialPos}deg)`;

	// 				el.style.transform = `scale(${scale}) rotate(${
	// 					initialPos + (i % 2 === 0 ? rotate : -rotate)
	// 				}deg)`;
	// 			});
	// 		}
	// 	});
	// }
};

const animateNote = (element, scroller, windowHeight) => {
	const handleScroll = e => {
		const scrollY = e.scroll.y;
		const offsetTop = $(element).offset().top;
		const offsetBottom = windowHeight - offsetTop - $(element).height();

		const scale = offsetBottom / windowHeight;

		element.style.transform = `scale(${0.8 + scale})`;
	};

	scroller.scroll.on("scroll", handleScroll);
};

export default animateNotes;
