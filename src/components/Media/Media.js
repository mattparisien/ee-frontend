import { Box, Link, Typography } from "@mui/material";
import classNames from "classnames";
import { motion } from "framer-motion/dist/framer-motion";
import React, { createContext, useMemo, useState } from "react";
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
	const { accent, items, options, permalink, overlayColor, accentColor, zoom } =
		props;

		console.log(props)

		

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
					<Box sx={{ overflow: "hidden", height: "100%" }}>
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
								<ConditionalWrapper
									wrapper={children => (
										<motion.div
											style={{ height: "100%" }}
											initial={{ scale: 1.2 }}
											animate={{
												scale: 1,
												transition: {
													duration: 2,
													ease: [0.86, 0, 0.07, 0.995],
												},
											}}
											exit={{
												scale: 1.2,
												transition: {
													duration: 2,
													ease: [0.86, 0, 0.07, 0.995],
												},
											}}
										>
											{children}
										</motion.div>
									)}
									condition={zoom}
								>
									{mediaType && mediaType === "image" && (
										<Image src={items[0].url} alt={items[0].alt} />
									)}
									{mediaType && mediaType === "video" && (
										<Video src={items[0].url} />
									)}
									{mediaType && mediaType === "carousel" && (
										<Carousel
											items={items}
											image={url => <Image src={url} />}
											video={url => <Video src={url} />}
										/>
									)}
								</ConditionalWrapper>
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
					</Box>
					{!loaded && <Loader />}
					<Overlay color={overlayColor} />
					{loaded && <MediaTransition />}
					{accent && <Accent component={CircleSvg} color={accentColor} />}
				</ConditionalWrapper>
			</Box>
		</MediaContext.Provider>
	);
}

export default Media;
