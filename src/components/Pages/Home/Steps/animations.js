import { ConstructionOutlined } from "@mui/icons-material";
import $ from "jquery";
import useScrollHandler from "../../../../helpers/hooks/useScrollHandler";

const animateNotes = (scroller, elements) => {
	const windowHeight = window.innerHeight;

	const handleIntersection = entries => {
		entries.forEach(note => {
			if (note.isIntersecting) {
				animateNote(note.target, scroller, windowHeight);
			}
		});
	};

	const observer = new IntersectionObserver(handleIntersection);

	$(elements.notes).each((i, el) => observer.observe(el));
};

const animateNote = (element, scroller, windowHeight) => {
	const handleScroll = e => {
		const offsetTop = $(element).offset().top;
		const offsetBottom = windowHeight - offsetTop - $(element).height();

		const scale = offsetBottom / (windowHeight / 2) / 2;

		const initialRotation = element.dataset.initial;
		const rotate = initialRotation + (offsetBottom / windowHeight) * 100;

		element.style.transform = `scale(${0.8 + scale}) rotate(${rotate}deg)`;
	};

	if (scroller.isReady) {
		scroller.scroll.on("scroll", handleScroll);
	} else {
		window.addEventListener("scroll", handleScroll);
	}
};

export default animateNotes;
