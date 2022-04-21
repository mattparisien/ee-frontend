import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Box, Link } from "@mui/material";
import React from "react";

function Cta({ children, target, href }) {
	const styles = {
		marginTop: "4rem",
		display: "flex",
		alignItems: "center",
		justifyContent: "flex-start",
		"&:hover::after": {
			transform: `scale(1.6)translateY(-30%)`,
			transformOrigin: "center",
		},
		"&:hover .inner": {
			transform: "translateX(1rem)",
		},
	};

	return (
		<Link
			component='a'
			variant='h6'
			children={
				<>
					<Box
						className='inner'
						component='span'
						fontWeight={300}
						sx={theme => ({
							transition: `${theme.transitions.duration.long}s ${theme.transitions.easing.zoom}`,
						})}
					>
						{children}
						{<ArrowForwardIosIcon sx={{ height: "0.8rem" }} />}
					</Box>
				</>
			}
			target={target}
			rel={"noreferrer"}
			href={href}
			sx={styles}
			underline={"none"}
			color='inherit'
			className='accent accent-text accent-left'
		/>
	);
}

export default Cta;
