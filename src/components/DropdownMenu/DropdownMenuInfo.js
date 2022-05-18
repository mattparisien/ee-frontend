import React from "react";
import SocialList from "../Lists/SocialList";
import Paragraph from "../Paragraph/Paragraph";
import styles from "./DropdownMenu.module.css";

function DropdownMenuInfo({ dropdownActive }) {
	return (
		<div className='DropdownMenuInfo absolute bottom-0 right-0 flex items-end justify-between w-full p-4'>
			<Paragraph
				size='small'
				wrapperClasses={`text-light transition-[transform,opacity] ${
					dropdownActive
						? "opacity-100 translate-y-0 ease-[cubic-bezier(.215,.61,.355,1)] duration-[600ms] delay-[600ms]"
						: "opacity-0 -translate-y-full"
				} `}
			>
				Social Impact Agency
			</Paragraph>
			<div
				className={`${
					dropdownActive
						? styles.SocialListWrapper + ` translate-y-0 opacity-100`
						: "translate-y-full opacity-0"
				} `}
			>
				<SocialList color='light' />
			</div>
		</div>
	);
}

export default DropdownMenuInfo;
