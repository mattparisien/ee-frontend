import { Box } from "@mui/material";
import React from "react";
import Cta from "../../Link/Cta";
import Markdown from "../../Markdown/Markdown";
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
				left: 1,
				right: 1,
			}}
			rightStyles={theme => ({
				[theme.breakpoints.up("sm")]: {
					marginLeft: theme.spacing(30),
				},
			})}
			leftComponent={<Left text={data.textLeft} cta={data.cta} />}
			rightComponent={<Right text={data.textRight} />}
		/>
	);
}

function Left({ text, cta }) {
	return (
		<>
			<Markdown
				variantMap={{
					p: "body2",
				}}
			>
				{text}
			</Markdown>
			{cta && (
				<Cta
					children={cta.ButtonText}
					target={cta.OpenNewTab ? "_blank" : "_self"}
					href={cta.URL}
				/>
			)}
		</>
	);
}
function Right({ text }) {
	return (
		<Markdown
			variantMap={{
				p: "body2",
			}}
		>
			{text}
		</Markdown>
	);
}

export default SplitTextBlock;
