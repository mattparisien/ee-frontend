import React from "react";
import ReactMarkdown from "react-markdown";
import { Typography } from "@mui/material";
import { List, ListItem, ListItemText, ListItemIcon } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import { motion } from "framer-motion/dist/framer-motion";
import Fade from "../HOC/Fade";
import FadeChildren from "../HOC/FadeChildren";
import { Link } from "@mui/material";
import { Box } from "@mui/material";
import ConditionalWrapper from "../Containers/ConditionalWrapper";
import SplitText from "../HOC/SplitText";

function Markdown({ children, variantMap, sx, isSplit }) {
	const componentMap = {
		h1: ({ node, ...props }) => (
			<Typography component='h1' variant='h1' mb={7}>
				<motion.div>{props.children}</motion.div>
			</Typography>
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
			<Typography sx={sx} component='h3' variant='h3' fontWeight={400} mb={7}>
				<ConditionalWrapper
					condition={isSplit}
					wrapper={SplitText}
					timeout={1000}
				>
					{props.children}
				</ConditionalWrapper>
			</Typography>
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
			<Fade
				wrapper={children => (
					<Typography
						component='p'
						variant={variantMap && variantMap.p ? variantMap.p : "body1"}
						children={props.children}
						fontWeight='40'
						sx={sx}
						mb={5}
					>
						{children}
					</Typography>
				)}
			>
				{props.children}
			</Fade>
		),
		ul: ({ node, ...props }) => (
			<FadeChildren
				wrapper={List}
				childWrapper={ListItem}
				wrapperProps={{ disablePadding: true }}
				childWrapperProps={{ disablePadding: true }}
			>
				{props.children}
			</FadeChildren>
		),
		li: ({ node, ...props }) => (
			<>
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
			</>
		),
		a: ({ node, ...props }) => (
			<>
				<Link
					children={props.children}
					fontWeight={600}
					underline={"none"}
					sx={theme => ({
						color: theme.palette.primary.dark,
						position: "relative",
						"&::after": {
							position: "absolute",
							content: '""',
							bottom: 0,
							left: 0,
							width: "100%",
							height: "0.1rem",
							backgroundColor: theme.palette.primary.dark,
						},
					})}
				/>
			</>
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
