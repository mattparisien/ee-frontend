import { Box, Divider } from "@mui/material";
import React from "react";
import Cta from "../../Link/Cta";
import StatsGrid from "./StatsGrid";


function StatsBlock({ data }) {
	return (
		<>
			<Divider />

			<div className='content-wrapper flex flex-col items-center jusitfy-center py-20'>
				{data.heading && <Heading level={3}>{data.heading}</Heading>}

				<StatsGrid items={data.StatsBlockItem} />
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

export default StatsBlock;
