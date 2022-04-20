import React from "react";
import { Box } from "@mui/system";
import SplitBlock from "./SplitBlock";
import Markdown from "../../../../Markdown/Markdown";

function SplitTextBlock({ data }) {
	console.log(data);

	return (
		<SplitBlock>
			<Box className='left'>
				<Markdown>{data.data.left.text}</Markdown>
			</Box>
			<Box className='right'>
				<Markdown>{data.data.right.text}</Markdown>
			</Box>
		</SplitBlock>
	);
}

export default SplitTextBlock;
