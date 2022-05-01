import { Box, Typography } from "@mui/material";
import React from "react";
import SplitText from "../../../../HOC/SplitText";

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
				<Typography
					variant='h2'
					sx={stepHeading}
					mb={2}
					className='-splitChars'
				>
					<SplitText>{step.title}</SplitText>
				</Typography>

				<Typography
					sx={stepParagraph}
					className='body'
					variant='body2'
					component={"p"}
				>
					{step.body}
				</Typography>
			</Box>
		</Box>
	);
}

export default StepItem;
