import { Box, Link, Typography } from "@mui/material";
import classNames from "classnames";
import React, { useMemo } from "react";
import Image from "./Image";
import Video from "./Video";
import Carousel from "./Carousel";
import ConditionalWrapper from "../Containers/ConditionalWrapper";
import Container from "../Containers/ContainerFluid";

function Media(props) {
	const { aspectRatio, width, height, accent, items, options, permalink } =
		props;

	console.log("the media", items);

	const classes = classNames("media-wrapper", {
		"accent accent-image accent-left": accent,
	});

	const innerComponent = {
		width: "100%",
		height: "100%",
		objectFit: "cover",
		objectPosition: "center",
	};

	const wrapper = theme => ({
		height: height,
		width: width,
		position: "relative",
		aspectRatio: `1 / ${options && theme.aspectRatio[options.format]}`,
		"img, video": innerComponent,
	});

	return (
		<Box className={classes} sx={wrapper}>
			<ConditionalWrapper
				condition={!props.disableContainer}
				wrapper={children => (
					<Container sx={{ height: "100%" }} disableGutters>
						{children}
					</Container>
				)}
			>
				<ConditionalWrapper
					wrapper={children => (
						<Link children={children} href={permalink} target='_blank' />
					)}
					condition={options && options.linkable && permalink}
				>
					{items && items.type === "image" && (
						<Image src={items && items.url} alt={items && items.alt} />
					)}
					{items && items.type === "video" && (
						<Video src={items && items.url} />
					)}
					{items && items.type === "carousel" && (
						<Carousel
							items={items && items.items}
							image={url => <Image src={url} />}
							video={url => <Video src={url} />}
						/>
					)}
				</ConditionalWrapper>
				{options && options.displayCaption && items.caption && (
					<Box className='media-caption' m={2}>
						<Typography variant='body2' textAlign='right' sx={{ opacity: 0.6 }}>
							{items.caption}
						</Typography>
					</Box>
				)}
			</ConditionalWrapper>
		</Box>
	);
}

export default Media;
