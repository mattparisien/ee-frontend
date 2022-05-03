import React from "react";
import { Box } from "@mui/material";
import Markdown from "../Markdown/Markdown";
import Media from "../Media/Media";
import Cta from "../Link/Cta";

function TextWrapBlock({ data }) {
	const right = theme => ({
		position: "relative",
		paddingBottom: theme.spacing(10),
		[theme.breakpoints.up("sm")]: {
			paddingLeft: theme.spacing(10),

			float: "right",
		},
	});

	return (
		data && (
			<Box className='wrapper'>
				<Box sx={right}>
					<Media
						frame
						items={data.media.items}
						options={{
							...data.media.options,
							width: {
								desktop: "33.3vw",
								mobile: "calc(100vw - 2rem)",
							},

							maxWidth: {
								desktop: "600px",
								mobile: "100vw",
							},
						}}
					/>
				</Box>
				<Markdown
					variantMap={{
						p: "body2",
					}}
				>
					{data.text}
				</Markdown>
				{data.callToAction && (
					<Cta
						target={
							data.callToAction.openNewTab &&
							!data.callToAction.url.includes("mailto:")
								? "_blank"
								: "_self"
						}
						href={data.callToAction.url}
					>
						{data.callToAction.buttonText}
					</Cta>
				)}
			</Box>
		)
	);
}

export default TextWrapBlock;
