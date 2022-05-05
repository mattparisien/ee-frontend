import { Box, Divider, Typography } from "@mui/material";
import React from "react";
import Cta from "../../Link/Cta";
import { useTheme, useMediaQuery } from "@mui/material";

function StatsBlock({ data }) {
	const itemsWrap = theme => ({
		width: "100%",
		display: "grid",
		overflow: "hidden",
		[theme.breakpoints.down("md")]: {
			".item:not(:last-of-type)": {
				marginBottom: theme.spacing(10),
			},
		},
		[theme.breakpoints.up("md")]: {
			gridTemplateColumns: `repeat(${data && data.statsBlockItem.length}, 1fr)`,
			".item:not(:first-of-type):not(:last-of-type)": {
				margin: "0 2rem",
			},
		},
	});

	return (
		<>
			<Divider />
			<Box
				display='flex'
				flexDirection='column'
				justifyContent='center'
				alignItems='center'
				py={15}
			>
				{data.heading && (
					<Typography variant='body2' component='h5' textAlign='center' mb={15}>
						{data.heading}
					</Typography>
				)}

				<Box className='grid-wrapper' sx={itemsWrap}>
					{data.statsBlockItem.map((item, i) => (
						<Item
							heading={item.heading}
							line={item.line}
							key={i}
							itemLength={data.statsBlockItem.length}
						/>
					))}
				</Box>
			</Box>
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

function Item({ heading, line, itemLength }) {
	const theme = useTheme();
	const matches = useMediaQuery(
		`(max-width: ${theme.breakpoints.values.md}px)`
	);

	const item = {};
	return (
		<Box textAlign='center' sx={item} className='item'>
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
		</Box>
	);
}

export default StatsBlock;
