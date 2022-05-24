import useMouseEnter from "../../helpers/hooks/useMouseEnter";
import Frame from "../Frame/Frame";

function HoverFrame({ wrapper, children }) {
	const { ref, isEnter } = useMouseEnter();

	children = (
		<>
			{children}
			{<Frame isHovering={isEnter} />}
		</>
	);

	return wrapper(children, ref);
}

export default HoverFrame;
