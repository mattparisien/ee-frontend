import React from "react";
import { Box, Typography } from "@mui/material";
import Fade from "react-reveal";
import ReactMarkdown from "react-markdown";

function StepItem({ step }) {
	const stepHeading = theme => ({
		fontSize: "5vw",
		lineHeight: "5vw",
		fontFamily: "Kobe",
		textAlign: "center",
		[theme.breakpoints.down("md")]: {
			fontSize: "6vw",
		},
		[theme.breakpoints.down("sm")]: {
			fontSize: "8.5vw",
			lineHeight: "8.5vw",
		},
	});

	const stepParagraph = theme => ({
		fontSize: "1.3vw",
		textAlign: "center",
		[theme.breakpoints.down("md")]: {
			fontSize: "2vw",
		},
		[theme.breakpoints.down("sm")]: {
			fontSize: "3vw",
		},
	});
	return (
		<Box className={`c-steps_item c-steps_item_${step.id}`}>
			<Box className='item-content'>
				<Fade bottom>
					<Typography
						variant='h2'
						sx={stepHeading}
						mb={2}
						className='-splitChars'
					>
						<ReactMarkdown
							disallowedElements={["p"]}
							unwrapDisallowed
							className='title'
							children={step.Title}
						/>
					</Typography>
				</Fade>

				<Fade bottom>
					<Typography
						sx={stepParagraph}
						className='body'
						variant='body1'
						component={"p"}
					>
						{step.Body}
					</Typography>
				</Fade>
			</Box>
		</Box>
	);
}

export default StepItem;
