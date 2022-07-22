import React, { useMemo } from "react";
import Block from "../../../Blocks/Block";
import getBlockName from "./utils/getBlockName";
import Next from "./components/Next";

function SinglePage({ Choose, Title, Subtitle, FeatureImage }) {
	const blocks = useMemo(() => {
		return Choose.map(block => ({
			data: { ...block },
			component: getBlockName(block.__component),
		}));
	}, [Choose]);

	return (
		<div className='SinglePage first-child:pt-16 first-child:mt-0 second-child:mt-0 second-last-child:my-0 last-child:mb-0 last-child:mt-0'>
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
			<Next />
		</div>
	);
}

export default React.memo(SinglePage);
