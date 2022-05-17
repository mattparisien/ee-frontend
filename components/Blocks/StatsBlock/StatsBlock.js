import { Box, Divider, Typography } from "@mui/material";
import React from "react";
import Cta from "../../Link/Cta";
import { useTheme, useMediaQuery } from "@mui/material";
import Fade from "../../HOC/Fade";
import StatsGrid from "./StatsGrid";

function StatsBlock({ data }) {
	return (
		<>
			<Divider />

			<div className='content-wrapper flex flex-col items-center jusitfy-center py-20'>
				{data.heading && <Heading level={3}>{data.heading}</Heading>}

				<StatsGrid items={data.statsBlockItem} />
			</div>

			<Divider />
			{data.cta && (
				<Box display='flex' alignItems='center' justifyContent='center'>
					<Cta
						href={data.cta.URL}
						target={data.cta.OpenNewTab ? "_blank" : "_self"}
					>
						{data.cta.ButtonText}
					</Cta>
				</Box>
			)}
		</>
	);
}

function Item({ heading, line, itemLength, index }) {
	const theme = useTheme();
	const matches = useMediaQuery(
		`(max-width: ${theme.breakpoints.values.md}px)`
	);

	const item = theme => ({
		[theme.breakpoints.down("md")]: {
			marginBottom: index + 1 < itemLength && "2rem",
		},
	});

	return (
		<Fade
			wrapper={Box}
			wrapperProps={{
				sx: item,
				className: "item",
				textAlign: "center",
			}}
			enterDelay={`${0.25 * index}`}
		>
			<Typography
				variant={matches ? "h1" : "h2"}
				component='h3'
				sx={{ width: "100%" }}
			>
				{heading}
			</Typography>
			<Typography
				variant={matches ? "body1" : "body3"}
				component='p'
				sx={{ width: "100%" }}
			>
				{line}
			</Typography>
		</Fade>
	);
}

export default StatsBlock;
