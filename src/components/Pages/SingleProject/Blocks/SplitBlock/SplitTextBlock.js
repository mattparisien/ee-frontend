import { Box } from "@mui/material";
import React from "react";
import Cta from "../../../../Link/Cta";
import Markdown from "../../../../Markdown/Markdown";
import SplitBlock from "./SplitBlock";

function SplitTextBlock({ data }) {
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

function Left() {}
function Right() {}


export default SplitTextBlock;
