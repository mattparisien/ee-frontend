import React, { useContext } from "react";
import classNames from "classnames";
import { GlobalContext } from "../../../lib/context";

function CloseButton({ isReady }) {
	const { toggleModal } = useContext(GlobalContext);

	const handleClose = () => {
		toggleModal();
	};

	return (
		<button
			className='CloseButton m-7 h-7 w-16 rounded-3xl z-[99] bg-light absolute right-0 top-0 after:bg-dark before:bg-dark after:absolute before:absolute after:top-1/2 after:left-1/2 after:w-[30px] after:h-[2px] before:top-1/2 before:left-1/2 before:w-[30px] before:h-[2px] before:transition before:duration-[300ms] before:ease-[cubic-bezier(0.35, 0.755, 0.42, 0.95)] after:transition after:duration-[300ms] after:ease-[cubic-bezier(0.35, 0.755, 0.42, 0.95)] before:-translate-y-1/2 after:-translate-y-1/2 before:-translate-x-1/2 after:-translate-x-1/2 before:rotate-[20deg] after:-rotate-[20deg]'
			onClick={handleClose}
		></button>
	);
}

export default CloseButton;
