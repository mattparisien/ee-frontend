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

import { Reveal } from "react-reveal";

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
		overflow: "hidden",
		height: height,
		width: width,
		position: "relative",
		".react-reveal": {
			height: "100%",
		},
		aspectRatio: `1 / ${options && theme.aspectRatio[options.format]}`,
		"img, video": innerComponent,
	});

	const containerVariants = {
		hidden: {
			opacity: 0,
			y: "100%",
		},
		visible: {
			opacity: 1,
			y: 0,
			transition: { delay: 1, duration: 2, ease: "circOut" },
		},
		exit: {
			opacity: 0,
			x: 400,
			transition: { ease: "easeInOut", duration: 1, delay: 0.1 },
		},
	};

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
						<Reveal>
							<Box sx={{ height: "100%" }}>
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
							</Box>
						</Reveal>
					</ConditionalWrapper>
					{options && options.displayCaption && items.caption && (
						<Box className='media-caption' m={2}>
							<Typography
								key='title'
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
