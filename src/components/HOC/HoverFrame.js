import useMouseEnter from "../../helpers/hooks/useMouseEnter";
// import { Frame } from "../Views/Projects/ProjectGrid/components/ProjectGridItem";

function HoverFrame({ wrapper, children }) {
	const { ref, isEnter } = useMouseEnter();

	children = (
		<>
			{children}
			{/* {<Frame isHovering={isEnter} />} */}
		</>
	);

	return wrapper(children, ref);
}

export default HoverFrame;
