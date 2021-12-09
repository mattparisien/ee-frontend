import React, { useRef } from "react";

export default function ModalWrapper(props) {
	const { hoverState } = props;


	const ref = useRef(null);

	return (
		<div class='modal-wrapper'>
			<div ref={ref} id='draggable-follower'></div>
		</div>
	);
}
