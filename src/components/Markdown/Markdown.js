import React from "react";
import ReactMarkdown from "react-markdown";
import { Typography } from "@mui/material";
import { List, ListItem, ListItemText, ListItemIcon } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";

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
		h4: ({ node, ...props }) => (
			<Typography
				component='h4'
				variant='h4'
				children={props.children}
				fontWeight={400}
				gutterBottom={4}
			/>
		),
		h5: ({ node, ...props }) => (
			<Typography
				component='h5'
				variant='h5'
				children={props.children}
				fontWeight={600}
				gutterBottom={4}
			/>
		),
		h6: ({ node, ...props }) => (
			<Typography
				component='h6'
				variant='h6'
				children={props.children}
				fontWeight={600}
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
		ul: ({ node, ...props }) => <List disablePadding>{props.children}</List>,
		li: ({ node, ...props }) => (
			<ListItem disablePadding>
				<ListItemIcon sx={{ minWidth: "auto", marginRight: "0.6rem" }}>
					<CheckIcon sx={{ height: "0.97rem", opacity: 0.5 }} />
				</ListItemIcon>
				<ListItemText
					disablePadding
					children={props.children}
					primaryTypographyProps={{
						variant: "h6",
						fontWeight: 200,
					}}
				/>
			</ListItem>
		),
	};
	return (
		<ReactMarkdown components={componentMap} children={children} /> || null
	);
}

export default Markdown;
