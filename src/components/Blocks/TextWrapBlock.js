import React from "react";
import { Box } from "@mui/material";
import Markdown from "../Markdown/Markdown";
import Media from "../Media/Media";

function TextWrapBlock({ data }) {
	console.log(data);
	const wrapper = {};
	const left = {};
	const right = {
		float: "right",
	};

	return (
		data && (
			<Box sx={wrapper} className='wrapper'>
				<Markdown>{data.text}</Markdown>
				<Box
					sx={{
						float: "right",
						height: "400px",
						width: "500px",
						backgroundColor: "blue",
					}}
				></Box>
				{/* <Box sx={right}>
					<Media
						items={data.media.items}
						options={{
							...data.media.options,
							width: {
								desktop: "50vw",
								mobile: "100vw",
							},
							maxWidth: {
								desktop: "600px",
								mobile: "100vw",
							},
						}}
					/>
				</Box> */}
			</Box>
		)
	);
}

export default TextWrapBlock;
