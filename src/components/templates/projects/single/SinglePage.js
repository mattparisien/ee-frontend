import React, { useMemo } from "react";
import Block from "../../../Blocks/Block";
import getBlockName from "./utils/getBlockName";

function SinglePage({ Choose, Title, Subtitle, FeatureImage }) {
	console.log(Choose, Title, Subtitle, FeatureImage);

	const blocks = useMemo(() => {
		return Choose.map(block => ({
			data: { ...block },
			component: getBlockName(block.__component),
		}));
	}, [Choose]);

	return (
		<div className='SinglePage'>
			<Block
				data={{
					Title,
					Subtitle,
					FeatureImage,
				}}
				component='HeroBlock'
			/>
			{blocks.map((block, i) => (
				<Block {...block} key={i} />
			))}
		</div>
	);
}

export default SinglePage;
