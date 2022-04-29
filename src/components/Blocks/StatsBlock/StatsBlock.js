import React from "react";
import { Box, Stack, Typography, Divider } from "@mui/material";
import Cta from "../../Link/Cta";

function StatsBlock({ data }) {
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
				<Stack
					spacing={20}
					direction='row'
					justifyContent={"space-evenly"}
					alignItems='center'
					sx={theme => ({
						[theme.breakpoints.down("sm")]: {
							flexDirection: "column",
							justifyContent: "center",
							".item": {
								marginLeft: 0,
								marginBottom: theme.spacing(8),
							},
						},
					})}
				>
					{data.statsBlockItem.map((item, i) => (
						<Item heading={item.Heading} line={item.Line} key={i} />
					))}
				</Stack>
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

function Item({ heading, line }) {
	return (
		<Box className='item' textAlign='center'>
			<Typography variant='h2' component='h3' sx={{ width: "100%" }}>
				{heading}
			</Typography>
			<Typography variant='body2' component='p' sx={{ width: "100%" }}>
				{line}
			</Typography>
		</Box>
	);
}

export default StatsBlock;
