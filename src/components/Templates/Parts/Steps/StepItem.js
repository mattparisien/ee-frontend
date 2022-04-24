import { Box, Typography } from "@mui/material";
import React from "react";
import Fade from "react-reveal";

function StepItem({ step }) {
	const stepHeading = theme => ({
		fontSize: "4vw",
		lineHeight: "5vw",

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
						{step.title}
					</Typography>
				</Fade>

				<Fade bottom>
					<Typography
						sx={stepParagraph}
						className='body'
						variant='body2'
						component={"p"}
					>
						{step.body}
					</Typography>
				</Fade>
			</Box>
		</Box>
	);
}

export default StepItem;
