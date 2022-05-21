import React, { useMemo } from "react";
import Block from "../../../Blocks/Block";
import getBlockName from "./utils/getBlockName";

function SinglePage({ Choose }) {
	const blocks = useMemo(() => {
		return Choose.map(block => ({
			data: { ...block },
			component: getBlockName(block.__component),
		}));
	}, [Choose]);

	return (
		<div className='SinglePage'>
			{blocks.slice(0, 7).map((block, i) => (
				<Block {...block} key={i} />
			))}
		</div>
	);
}

export default SinglePage;
