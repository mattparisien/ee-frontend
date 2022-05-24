import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import React from "react";
import Container from "../Containers/ContainerFluid";
import "./Error.css";

function Error() {
	const wrapper = {
		zIndex: 9999999999999,
	};

	return (
		<div
			className='Error fixed top-0 left-0 bg-dark text-light w-screen h-screen flex items-center justify-center text-center text-3xl'
			style={wrapper}
		>
			<Container>
				<ErrorOutlineIcon
					sx={{ width: "8rem", height: "8rem", paddingBottom: "2rem" }}
				/>
				<h2 className='font-semibold'>
					We are currently experiencing disruptions and are working hard to get
					back on ASAP, please check back soon!
				</h2>
			</Container>
		</div>
	);
}

export default Error;
