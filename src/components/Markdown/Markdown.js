import CheckIcon from "@mui/icons-material/Check";
import {
	Link,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	Typography,
} from "@mui/material";
import { motion } from "framer-motion";
import React from "react";
import ReactMarkdown from "react-markdown";
import ConditionalWrapper from "../Containers/ConditionalWrapper";
import Heading from "../Heading/Heading";
import SplitText from "../HOC/SplitText";
import Paragraph from "../Paragraph/Paragraph";
import "./Markdown";

function Markdown({
	children,
	variantMap,
	sx,
	isSplit,
	textLeft,
	textCenter,
	textRight,
}) {
	const componentMap = {
		h1: ({ node, ...props }) => (
			<Heading level={1}>
				<motion.div>{props.children}</motion.div>
			</Heading>
		),
		h2: ({ node, ...props }) => <Heading level={2}>{props.children}</Heading>,
		h3: ({ node, ...props }) => (
			<Heading level={3}>
				<ConditionalWrapper
					condition={isSplit}
					wrapper={SplitText}
					timeout={1000}
				>
					{props.children}
				</ConditionalWrapper>
			</Heading>
		),
		h4: ({ node, ...props }) => <Heading level={4}>{props.children}</Heading>,
		h5: ({ node, ...props }) => (
			<Typography
				component='h5'
				variant='h5'
				children={props.children}
				fontWeight={600}
				mb={7}
			/>
		),
		h6: ({ node, ...props }) => <Heading level={6}>{props.children}</Heading>,

		p: ({ node, ...props }) => (
			<Paragraph
				size={(variantMap && variantMap.p) || "large"}
				textCenter={textCenter}
				textLeft={textLeft}
				textRight={textRight}
			>
				{props.children}
			</Paragraph>
		),
		ul: ({ node, ...props }) => <List disablePadding>{props.children}</List>,
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
		a: ({ node, ...props }) => (
			<a
				{...props}
				rel='noopener noreferrer'
				target='_blank'
				style={{ fontWeight: 700 }}
				className='border-b hover:text-yellow-custom hover:border-yellow-custom transition-color duration-[200ms] ease '
			>
				{props.children}
			</a>
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
