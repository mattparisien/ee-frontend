import { Box, Typography } from "@mui/material";
import React from "react";
import SplitText from "../../../../HOC/SplitText";
import Markdown from "../../../../Markdown/Markdown";
import Overlay from "../../../../Media/Overlay";
import { useTheme } from "@mui/material";

function StepItem({ step, id }) {
	const theme = useTheme();

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
					variant='h3'
					component='h3'
				>
					<SplitText>{step.title}</SplitText>
				</Typography>

				<Markdown sx={{ textAlign: "center" }} variantMap={{ p: "body2" }}>
					{step.body}
				</Markdown>
			</Box>
			<Overlay
				color={
					theme.palette.primary.colorSet[
						Object.keys(theme.palette.primary.colorSet)[id]
					]
				}
				sx={{
					width: "60vw",
					height: "60vw",
					top: "24%",
					left: "50%",
					transform: "translate(-50%, -50%)",
					borderRadius: "50%",
					mixBlendMode: "multiply",
				}}
			/>
		</Box>
	);
}

export default StepItem;
