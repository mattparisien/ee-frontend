import React from "react";

function ProjectGridRow({ children, index }) {
	return (
		<div
			className={`ProjectGridRow mb-10 flex justify-center md:justify-${
				index % 2 === 0 ? "end" : "start"
			}`}
		>
			{children}
		</div>
	);
}

export default ProjectGridRow;
