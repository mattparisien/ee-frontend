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
				left: 1.4,
				right: 0.5,
			}}
			rightStyles={theme => ({
				[theme.breakpoints.up("sm")]: {
					marginLeft: "4rem",
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
			<Markdown>{text}</Markdown>
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
	return <Markdown>{text}</Markdown>;
}

export default SplitTextBlock;
