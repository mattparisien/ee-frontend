import { Box, Link } from "@mui/material";
import classNames from "classnames";
import React, { createContext, useMemo, useState } from "react";
import ConditionalWrapper from "../Containers/ConditionalWrapper";
import Container from "../Containers/ContainerFluid";
import CircleSvg from "../Vector/Circle";
import Frame from "../Vector/Frame";
import Accent from "./Accent";
import Carousel from "./Carousel";
import Image from "./Image";
import Loader from "./Loader";
import MediaCaption from "./MediaCaption";
import MediaTransition from "./MediaTransition";
import Overlay from "./Overlay";
import Video from "./Video";

export const MediaContext = createContext();
export const aspects = {
	portrait: 1.25,
	square: 1,
	landscape: 0.5625,
};

function Media(props) {
	const {
		accent,
		items,
		options,
		permalink,
		overlayColor,
		accentColor,
		zoom,
		frame,
		boxHeight,
		overflowHidden,
		disableParallax,
		width,
		aspect,
		lazy
	} = props;

	const classes = classNames("media-wrapper");

	const [loaded, setLoaded] = useState(false);

	const mediaType = useMemo(() => {
		if (items) {
			if (items.length > 1) {
				return "carousel";
			}

			return items[0].media_type;
		}
	}, [items]);

	const innerComponent = {
		width: "100%",
		height: "100%",
		position: "absolute",
		top: 0,
		left: 0,
		objectFit: "cover",
		objectPosition: "center",
		filter: options && options.filter && "grayscale(1)",
	};

	const aspectRatioConfig = theme => ({
		overflow: "hidden",
		width: width || "100%",
		paddingTop: `${aspects[aspect ? aspect : "square"] * 100}%` || "100%",
		position: "relative",

		"img, video, .swiper": innerComponent,
	});

	return (
		<MediaContext.Provider value={{ loaded, setLoaded, lazy }}>
			<Box
				className={classes}
				sx={{
					width: "100%",
					height: boxHeight || `calc(100% + 2rem)`,
					overflow: overflowHidden ? "hidden" : "",
					position: "relative",
					"img, video": innerComponent,
				}}
			>
				<ConditionalWrapper
					condition={props.options && props.options.inset}
					wrapper={children => (
						<Container sx={{ height: "100%" }} disableMaxWidth>
							{children}
						</Container>
					)}
				>
					<ConditionalWrapper
						condition={!props.disableContainer}
						wrapper={children => (
							<Container sx={{ height: "100%" }} disableGutters>
								{children}
							</Container>
						)}
					>
						<Box
							sx={
								!aspect ? { width: "100%", height: "100%" } : aspectRatioConfig
							}
							className='aspect-wrap'
						>
							<ConditionalWrapper
								wrapper={children => (
									<Link children={children} href={permalink} target='_blank' />
								)}
								condition={options && options.linkable && permalink}
							>
								{mediaType && mediaType === "image" && (
									<Image src={items[0].url} alt={items[0].alt} />
								)}
								{mediaType && mediaType === "video" && (
									<Video src={items[0].url} thumbnail={items[0].thumbnailUrl} />
								)}
								{mediaType && mediaType === "carousel" && (
									<Carousel
										items={items}
										image={url => <Image src={url} />}
										video={url => <Video src={url} />}
									/>
								)}
							</ConditionalWrapper>
						</Box>
						{options && options.displayCaption && (
							<MediaCaption caption={items[0].caption} />
						)}
					</ConditionalWrapper>

					{!loaded && <Loader />}
					<Overlay color={overlayColor} />
					{loaded && <MediaTransition />}
					{accent && <Accent component={CircleSvg} color={accentColor} />}
				</ConditionalWrapper>
				{frame && <Frame sx={{ transform: "scale(1.05)" }} />}
			</Box>
		</MediaContext.Provider>
	);
}

export default Media;
