import React from "react";
import { Box } from "@mui/material";
import Markdown from "../Markdown/Markdown";
import Media from "../Media/Media";
import Cta from "../Link/Cta";
import useMediaRatio from "../../helpers/hooks/useMediaRatio";

function TextWrapBlock({ data }) {
	const right = theme => ({
		width: "50vw",
		margin: "-10vw auto 0 auto",
		position: "relative",
		paddingBottom: theme.spacing(10),
		[theme.breakpoints.up("sm")]: {
			width: "30vw",
			paddingLeft: theme.spacing(10),
			float: "right",
		},
	});

	const ratio = useMediaRatio(
		data && data.media.items[0].width,
		data && data.media.items[0].height
	);

	return (
		data && (
			<Box className='wrapper'>
				<Box sx={right}>
					<Media
						aspect={ratio}
						frame
						items={data.media.items}
						options={{
							...data.media.options,
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
