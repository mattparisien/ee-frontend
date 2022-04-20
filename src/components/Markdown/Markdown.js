import React from "react";
import ReactMarkdown from "react-markdown";
import { Typography } from "@mui/material";

function Markdown({ children }) {
	const componentMap = {
		h1: ({ node, ...props }) => (
			<Typography component='h1' variant='h1' children={props.children} />
		),
		h2: ({ node, ...props }) => (
			<Typography
				component='h2'
				variant='h2'
				children={props.children}
				fontWeight={400}
				gutterBottom
			/>
		),

		p: ({ node, ...props }) => (
			<Typography
				component='p'
				variant='h4'
				children={props.children}
				gutterBottom
			/>
		),
	};
	return <ReactMarkdown components={componentMap} children={children} />;
}

export default Markdown;
