import React from "react";

function ProjectGridItemInfo({ title, subtitle }) {
	return (
		<div className='ProjectGridItemInfo w-full mt-5 flex items-start' >
			<span className='uppercase text-lg leading-5 max-w-1/3'>{title}</span>
			<span className='uppercase w-full pl-5 text-lg leading-5'>
				{subtitle}
			</span>
			<div className='relative w-2 h-2 before:w-full before:h-full before:bg-black before:absolute before:rounded-full self-center overflow-visible'></div>
		</div>
	);
}

export default ProjectGridItemInfo;
