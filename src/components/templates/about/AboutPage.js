import React, { useEffect, useState } from "react";
import Block from "../../Blocks/Block";
import formatBlockData from "../../Blocks/helpers/formatBlockData";

function AboutPage({ blocks }) {
	const [blockData, setBlockData] = useState([]);

	useEffect(() => {
		const normalizedBlocks = formatBlockData(blocks);

		normalizedBlocks.then(res => {
			res.forEach(block => {
				block.then(blockInfo => {
					if (blockInfo) {
						setBlockData(prev => [
							...prev,
							{ name: blockInfo.name, data: { ...blockInfo.data } },
						]);
					}
				});
			});
		});
	}, []);

	return (
		<>
			<div className='hi'>hi</div>
			{blockData &&
				blockData.map((block, i) => (
					<Block name={block.name} data={block.data} />
				))}
		</>
	);
}

export default AboutPage;
