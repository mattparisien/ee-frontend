import React from "react";
import Block from "../../Blocks/Block";
import getBlockName from "../../Blocks/helpers/getBlockName";

function AboutPage({ blocks }) {
	const template = blocks.map((block, i) => (
		<Block
			component={getBlockName(block.__component)}
			key={i}
			data={{
				...block,
			}}
		/>
	));

	return <div className='AboutPage first-child:pt-16 first-child:mt-0'>{template}</div>;
}

export default React.memo(AboutPage);
