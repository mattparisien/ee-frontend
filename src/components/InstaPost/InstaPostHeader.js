import React from "react";
import InstaPostAvatar from "./InstaPostAvatar";

function InstaPostHeader({ avatar, handle, classes }) {
	return (
		<header className={`InstaPostHeader hover:opacity-60 transition-opacity ease duration-[300ms] ${classes}`}>
			<a
				href={`https://instagram.com/${handle || "eyes__ears"}`}
				target='_blank'
				rel='noopener noreferrer'
			>
				<div className='user-details h-full flex items-center justify-start'>
					<InstaPostAvatar url={avatar} />
					<div className='user-details_handle text-neutral-900 ml-4 font-semibold'>
						<span>{handle ? `@${handle}` : '@eyes__ears'}</span>
					</div>
				</div>
			</a>
		</header>
	);
}

export default InstaPostHeader;
