import React, { useRef } from "react";

function ListBlogPosts({ gap, padding }) {
	const gridItemRefs = useRef(null);
	const imageRefs = useRef(null);
	gridItemRefs.current = [];
	imageRefs.current = [];

	return (
		<>
			{/* {data && renderGridItems(data)} */}
			<div>hi</div>
		</>
	);
}

export default ListBlogPosts;
