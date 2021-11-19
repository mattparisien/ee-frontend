import React, { useRef, useEffect } from "react";
import { followCursor, unfollowCursor } from "../animations";
import classNames from "classnames";

export default function ModalWrapper(props) {
	const { hoverState } = props;


	const ref = useRef(null);

	return (
		<div class='modal-wrapper'>
			<div ref={ref} id='draggable-follower'></div>
		</div>
	);
}
