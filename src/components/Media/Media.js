import { Box } from "@mui/material";
import classNames from "classnames";
import React from "react";
import Image from "./Image";
import Video from "./Video";
import Carousel from "./Carousel";
import ConditionalWrapper from "../Containers/ConditionalWrapper";
import { Link } from "@mui/material";
import Container from "../Containers/ContainerFluid";

function Media(props) {
	const { aspectRatio, width, height, accent, items, options, permalink } =
		props;

	const classes = classNames("media-wrapper", {
		"accent accent-image accent-left": accent,
	});

	const innerComponent = {
		width: "100%",
		height: "100%",
		objectFit: "cover",
		objectPosition: "center",
	};

	const wrapper = {
		height: height,
		width: width,
		position: "relative",
		aspectRatio: `1 / ${aspectRatio}`,
		"img, video": innerComponent,
	};

	return (
		<Box className={classes} sx={wrapper}>
			<Container
				disableGutters
				sx={theme => ({
					height: "100%",
					padding: options && options.inset ? theme.spacing(10) : 0,
				})}
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
			</Container>
		</Box>
	);
}

export default Media;
