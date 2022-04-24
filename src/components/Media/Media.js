import { Box, Link, Typography } from "@mui/material";
import classNames from "classnames";
import React, { useState, createContext } from "react";
import ConditionalWrapper from "../Containers/ConditionalWrapper";
import Container from "../Containers/ContainerFluid";
import Carousel from "./Carousel";
import Image from "./Image";
import Overlay from "./Overlay";
import Video from "./Video";
import Loader from "./Loader";

export const MediaContext = createContext();

function Media(props) {
	const {
		aspectRatio,
		width,
		height,
		accent,
		items,
		options,
		permalink,
		overlayColor,
	} = props;

	const classes = classNames("media-wrapper", {
		"accent accent-image accent-left": accent,
	});

	const [loaded, setLoaded] = useState(false);

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
		<MediaContext.Provider value={{ loaded, setLoaded }}>
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
							<Typography
								variant='body2'
								textAlign='right'
								sx={{ opacity: 0.6 }}
							>
								{items.caption}
							</Typography>
						</Box>
					)}
				</ConditionalWrapper>
				{!loaded && <Loader />}
				<Overlay color={overlayColor} />
			</Box>
		</MediaContext.Provider>
	);
}

export default Media;
