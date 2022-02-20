import React, { useEffect } from "react";

function ProjectItem(props) {
	const { addToRefs } = props;

	useEffect(() => {}, []);

	return (
		<div className='project-item-page page-wrap' ref={addToRefs}>
			hi
		</div>
	);
}

export default ProjectItem;
