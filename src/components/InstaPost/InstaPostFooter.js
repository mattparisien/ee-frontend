import React, { useState } from "react";
import styles from "./InstaPostFooter.module.css";

function InstaPostFooter({ handle, classes, caption }) {
	const [isCollapsed, setIsCollapsed] = useState(true);

	const handleClick = () => {
		setIsCollapsed(prev => !prev);
	};

	return (
		<footer className={`InstaPostFooter relative ease w-full bg-white`}>
			<div
				className={`${styles[isCollapsed ? 'TextCollapsed' : 'TextOpen']} relative px-2 py-1 overflow-hidden`}
				style={{
					transition: "max-height 0.6s cubic-bezier(.645,.045,.355,1),",
					maxHeight: isCollapsed ? "3.4rem" : "100rem",
				}}
			>
				<div className='text-sm'>
					<span className='font-bold'>{handle}</span>
					<span className='ml-2'>{caption}</span>
				</div>
			</div>
			<button
				className='read-more text-xs block ml-auto z-50 pr-2 pb-2 font-semibold text-neutral-500 hover:text-dark transition duration-[300ms] ease'
				onClick={handleClick}
			>
				{isCollapsed ? "Read more" : "Close"}
			</button>
		</footer>
	);
}

export default InstaPostFooter;
