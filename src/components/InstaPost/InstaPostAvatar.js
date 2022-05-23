import React from "react";

function InstaPostAvatar({ url }) {
	return (
		<div
			className={"InstaPostAvatar rounded-full w-8 h-8 border p-1"}
			style={{ backgroundImage: `url(${url})`, backgroundSize: "cover" }}
		></div>
	);
}

export default InstaPostAvatar;
