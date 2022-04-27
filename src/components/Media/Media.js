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
	const { accent, items, options, permalink, overlayColor, format } = props;

	const classes = classNames("media-wrapper");

	console.log("the props", props);

	const [loaded, setLoaded] = useState(false);

	const innerComponent = {
		width: "100%",
		height: "100%",
		objectFit: "cover",
		objectPosition: "center",
	};

	const aspects = {
		portrait: 1.25,
		square: 1,
		landscape: 0.5625,
	};

	const aspectRatioConfig = theme => ({
		width: options && options.width.desktop,
		maxWidth: options && options.maxWidth.desktop,
		height: `calc(${options && options.width.desktop} * ${
			aspects[options && options.format]
		})`,
		maxHeight: `calc(${options && options.maxWidth.desktop} * ${
			aspects[options && options.format]
		})`,
		position: "relative",
		".react-reveal": {
			height: "100%",
		},

		[theme.breakpoints.down("sm")]: {
			maxWidth: options && options.maxWidth.mobile,
			width: options && options.width.mobile,
			maxHeight: "100%",
			height: `calc(${options && options.width.mobile} * ${
				aspects[options && options.format]
			})`,
		},

		"img, video": innerComponent,
	});

	return (
		<MediaContext.Provider value={{ loaded, setLoaded }}>
			<Box
				className={classes}
				sx={
					options && options.width
						? aspectRatioConfig
						: { width: "100%", height: "100%", "img, video": innerComponent }
				}
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
				</ConditionalWrapper>
			</Box>
		</MediaContext.Provider>
	);
}

export default Media;
