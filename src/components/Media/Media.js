import { Box, Link, Typography } from "@mui/material";
import classNames from "classnames";
import React, { createContext, useState } from "react";
import ConditionalWrapper from "../Containers/ConditionalWrapper";
import Container from "../Containers/ContainerFluid";
import CircleSvg from "../Vector/Circle";
import Accent from "./Accent";
import Carousel from "./Carousel";
import Image from "./Image";
import Loader from "./Loader";
import MediaTransition from "./MediaTransition";
import Overlay from "./Overlay";
import Video from "./Video";

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

	const classes = classNames("media-wrapper");

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
		".react-reveal": {
			height: "100%",
		},
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
					</ConditionalWrapper>
					{options && options.displayCaption && items.caption && (
						<Box className='media-caption' m={2}>
							<Typography
								key='title'
								variant='body3'
								fontWeight={400}
								textAlign='right'
								sx={{
									opacity: 0.6,
									display: "flex",
									alignItems: "center",
									justifyContent: "flex-end",
								}}
							>
								{items.caption}
							</Typography>
						</Box>
					)}
				</ConditionalWrapper>
				{!loaded && <Loader />}
				<Overlay color={overlayColor} />
				{loaded && <MediaTransition />}
				{accent && <Accent component={CircleSvg} />}
			</Box>
		</MediaContext.Provider>
	);
}

export default Media;
