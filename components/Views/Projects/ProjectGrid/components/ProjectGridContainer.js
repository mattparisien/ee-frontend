import React from "react";

function ProjectGridContainer({ children }) {
	return <div className='ProjectGrid min-h-screen grid grid-cols-12 gap-y-10 relative'>{children}</div>;
}

export default ProjectGridContainer;
