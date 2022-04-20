import React from "react";
import { Box, Link } from "@mui/material";
import SplitBlock from "./SplitBlock";
import Markdown from "../../../../Markdown/Markdown";
import Cta from "../../../../Link/Cta";

function SplitTextBlock({ data }) {
	console.log(data);

	const right = {
		"ul li": {
			textAlign: "left",
		},
	};

	return (
		<SplitBlock
			flex={{
				left: 2.7,
				right: 1,
			}}
		>
			<Box className='left'>
				<Markdown>{data.data.left.text}</Markdown>
				{data.data.left.cta && (
					<Cta
						children={data.data.left.cta.ButtonText}
						target={data.data.left.cta.OpenNewTab ? "_blank" : "_self"}
						href={data.data.left.cta.URL}
					/>
				)}
			</Box>
			<Box className='right' sx={right} pl={7}>
				<Markdown>{data.data.right.text}</Markdown>
			</Box>
		</SplitBlock>
	);
}

export default SplitTextBlock;
