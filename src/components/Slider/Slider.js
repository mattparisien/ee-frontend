import React, { useRef } from "react";
import "swiper";
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";
import "swiper/modules/pagination/pagination.min.css";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react";
import "swiper/swiper.min.css";
import ArrowButton from "../Button/ArrowButton";
import Link from "../Link/Link";
import ContainerFluid from "../Containers/ContainerFluid";
import { Box } from "@mui/material";
import { Typography } from "@mui/material";

function Slider({ items }) {
	SwiperCore.use([Autoplay, Navigation, Pagination]);

	const navigationPrevRef = useRef(null);
	const navigationNextRef = useRef(null);

	console.log("items", items);

	return (
		<div className='o-slider'>
			<ContainerFluid>
				<nav className='o-slider_nav'>
					<ArrowButton ref={navigationPrevRef} />
					<ArrowButton ref={navigationNextRef} rotation={"180"} />
				</nav>
				<Swiper
					height={"100%"}
					breakpoints={{
						300: {
							slidesPerView: 2,
							spaceBetween: 40,
						},
						700: {
							slidesPerView: 2,
							spaceBetween: 40,
						},
						800: {
							slidesPerView: 3,
							spaceBetween: 40,
						},
					}}
					spaceBetween={60}
					autoplay={{ delay: 4000 }}
					navigation={{
						prevEl: navigationPrevRef.current,
						nextEl: navigationNextRef.current,
					}}
				>
					{items &&
						items.map(item => (
							<SwiperSlide key={item.id}>
								<Item
									projectId={item.id}
									artistName={item.title}
									projectTitle={item.subtitle}
									src={item.media.featureImage.url}
									alt={item.media.featureImage.altText}
								/>
							</SwiperSlide>
						))}
				</Swiper>
			</ContainerFluid>
		</div>
	);
}

function Item({ src, alt, projectId, projectTitle, artistName }) {
	const desktopInfoStyles = {
		width: "100%",
		height: "100%",
		position: "absolute",
		top: 0,
		left: 0,
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "space-between",
		color: "white",
		zIndex: 99,
	};

	return (
		<Link classes='o-slider_item' isRouterLink href={`/projects/${projectId}`}>
			<img src={src} alt={alt}></img>
			<Box className='info_desktop' sx={desktopInfoStyles} p={2}>
				<Typography
					className='info_desktop--artist'
					variant='h5'
					sx={{
						alignSelf: "flex-start",
						transform: "translateY(120%)",
						opacity: 0,
					}}
				>
					{artistName}
				</Typography>
				<Typography
					className='info_desktop--title'
					variant='h5'
					sx={{
						alignSelf: "flex-end",
						transform: "translateY(120%)",
						opacity: 0,
					}}
				>
					{projectTitle}
				</Typography>
			</Box>
			<div className='info_mobile'>
				<div className='info_mobile--title'>{projectTitle}</div>
				<div className='info_mobile--artist'>{artistName}</div>
			</div>
		</Link>
	);
}

export default Slider;
