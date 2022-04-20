import React from "react";
import ReactMarkdown from "react-markdown";
import { Typography } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

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
				gutterBottom={4}
			/>
		),

		p: ({ node, ...props }) => (
			<Typography
				component='p'
				variant='h4'
				children={props.children}
				gutterBottom={10}
			/>
		),
		ul: ({ node, ...props }) => {
			<List children={props.children} />;
		},
		li: ({ node, props }) => {
			<ListItem disablePadding children={props.children}/>;
		},
	};
	return <ReactMarkdown components={componentMap} children={children} />;
}

export default Markdown;
