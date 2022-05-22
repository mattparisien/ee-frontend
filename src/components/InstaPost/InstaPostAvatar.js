import React from "react";

function InstaPostAvatar({ url, classes }) {
	return (
		<div className={'InstaPostAvatar rounded-full w-8 h-8 border p-1'}>
			<div
				className='w-full h-full'
				style={{ backgroundImage: `url(${url})`, backgroundSize: "cover" }}
			></div>
		</div>
	);
}

export default InstaPostAvatar;
