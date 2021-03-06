import React from "react";

function ProjectGridItemInfo({ title, subtitle }) {
	return (
		<div className='ProjectGridItemInfo w-full mt-3 lg:mt-4 flex items-start justify-between'>
			<span className='text-xs md:text-sm lg:text-md leading-3 md:leading-4 lg:leading-5'>
				{title}
			</span>
			<span className='text-xs md:text-sm pl-5 lg:text-md leading-3 md:leading-4 lg:leading-5 break-word'>
				{subtitle}
			</span>
		</div>
	);
}

export default ProjectGridItemInfo;
