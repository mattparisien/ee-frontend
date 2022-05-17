import React from "react";
import SocialList from "../Lists/SocialList";
import Paragraph from "../Paragraph/Paragraph";

function DropdownMenuInfo({ menuActive }) {
	return (
		<div className='DropdownMenuInfo absolute bottom-0 right-0 flex items-end justify-between w-full p-4'>
			<Paragraph
				size='small'
				wrapperClasses={`text-light transition-[transform,opacity] ${
					menuActive
						? "opacity-100 translate-y-0 ease-[cubic-bezier(.215,.61,.355,1)] duration-[600ms] delay-[600ms]"
						: "opacity-0 -translate-y-full"
				} `}
			>
				Social Impact Agency
			</Paragraph>
			<SocialList color='light' />
		</div>
	);
}

export default DropdownMenuInfo;
