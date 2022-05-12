import { Box, Typography, useTheme } from "@mui/material";
import React from "react";
import SplitText from "../../../../HOC/SplitText";
import Markdown from "../../../../Markdown/Markdown";
import { useMediaQuery } from "@mui/material";

function StepItem({ step, id }) {
	const theme = useTheme();
	const matches = useMediaQuery(
		`(max-width: ${theme.breakpoints.values.sm}px)`
	);

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
		<Box
			className={`c-steps_item c-steps_item_${step.id}`}
			sx={{ position: "relative" }}
		>
			<Box className='item-content'>
				<Typography
					sx={theme => ({
						textAlign: "center",
						marginBottom: theme.spacing(5),
					})}
					variant={matches ? 'h3' : "h4"}
					component={'h4'}
				>
					<SplitText>{step.title}</SplitText>
				</Typography>

				<Markdown sx={{ textAlign: "center" }} variantMap={{ p: "body2" }}>
					{step.body}
				</Markdown>
			</Box>
		</Box>
	);
}

export default StepItem;
