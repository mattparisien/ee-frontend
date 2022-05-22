import React, { useState } from "react";
import styles from "./InstaPostFooter.module.css";

function InstaPostFooter({ handle, classes, caption }) {
	const [isCollapsed, setIsCollapsed] = useState(true);

	const handleClick = () => {
		setIsCollapsed(prev => !prev);
	};

	return (
		<footer className={`InstaPostFooter relative ease w-full bg-light `}>
			<div
				className={`${styles.Text} ${
					isCollapsed ? "is-collapsed" : "is-open"
				} relative px-2 py-1`}
				style={{
					transition: "max-height 0.6s cubic-bezier(.645,.045,.355,1)",
					maxHeight: isCollapsed ? "3.4rem" : "10rem",
				}}
			>
				<div className='text-sm'>
					<span className='font-bold'>{handle}</span>
					<span className='ml-2'>{caption}</span>
				</div>
			</div>
			<button
				className='read-more text-sm absolute right-0 bottom-0 z-50 p-2 font-semibold'
				onClick={handleClick}
			>
				{isCollapsed ? "Read more" : "Close"}
			</button>
		</footer>
	);
}

export default InstaPostFooter;
