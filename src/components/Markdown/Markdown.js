import React from "react";
import ReactMarkdown from "react-markdown";
import { Typography } from "@mui/material";
import { List, ListItem, ListItemText, ListItemIcon } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";

function Markdown({ children, variantMap }) {
	const componentMap = {
		h1: ({ node, ...props }) => (
			<Typography
				component='h1'
				variant='h1'
				children={props.children}
				mb={7}
			/>
		),
		h2: ({ node, ...props }) => (
			<Typography
				component='h2'
				variant='h2'
				children={props.children}
				fontWeight={400}
				mb={7}
			/>
		),
		h3: ({ node, ...props }) => (
			<Typography
				component='h3'
				variant='h3'
				children={props.children}
				fontWeight={400}
				mb={7}
			/>
		),
		h4: ({ node, ...props }) => (
			<Typography
				component='h4'
				variant='h4'
				children={props.children}
				fontWeight={400}
				mb={7}
			/>
		),
		h5: ({ node, ...props }) => (
			<Typography
				component='h5'
				variant='h5'
				children={props.children}
				fontWeight={600}
				mb={7}
			/>
		),
		h6: ({ node, ...props }) => (
			<Typography
				component='h6'
				variant='h6'
				children={props.children}
				fontWeight={600}
				mb={3}
			/>
		),

		p: ({ node, ...props }) => (
			<Typography
				component='p'
				variant={variantMap && variantMap.p ? variantMap.p : "body1"}
				children={props.children}
				mb={5}
			/>
		),
		ul: ({ node, ...props }) => (
			<List disablePadding={true}>{props.children}</List>
		),
		li: ({ node, ...props }) => (
			<ListItem disablePadding>
				<ListItemIcon sx={{ minWidth: "auto", marginRight: "0.6rem" }}>
					<CheckIcon sx={{ height: "0.97rem", opacity: 0.5 }} />
				</ListItemIcon>
				<ListItemText
					children={props.children}
					primaryTypographyProps={{
						variant: "body3",
						fontWeight: 200,
					}}
				/>
			</ListItem>
		),
	};
	return (
		(
			<ReactMarkdown
				components={componentMap}
				children={children}
				variantMap={variantMap}
			/>
		) || null
	);
}

export default Markdown;
