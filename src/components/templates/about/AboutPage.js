import React, { useEffect, useState } from "react";
import Block from "../../Blocks/Block";
import formatBlockData from "../../Blocks/helpers/formatBlockData";

function AboutPage({ blocks }) {
	console.log("blocks", blocks);

	const template = blocks.slice(0, 1).map((block, i) => (
		<Block
			component={block.__component}
			key={i}
			data={{
				Title: block.Title,
			}}
		/>
	));

	return template;
}

export default AboutPage;
