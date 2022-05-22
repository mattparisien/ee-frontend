import React, { useEffect, useState } from "react";
import Block from "../../Blocks/Block";
import formatBlockData from "../../Blocks/helpers/formatBlockData";
import getBlockName from "../../Blocks/helpers/getBlockName";

function AboutPage({ blocks }) {
	const template = blocks.map((block, i) => (
		<Block
			component={getBlockName(block.__component)}
			key={i}
			data={{
				Title: block.Title,
			}}
		/>
	));

	return template;
}

export default AboutPage;
