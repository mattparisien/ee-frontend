import { Box, Typography, useMediaQuery } from "@mui/material";
import React, { useRef } from "react";
import "swiper";
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";
import "swiper/modules/pagination/pagination.min.css";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react";
import "swiper/swiper.min.css";
import ContainerFluid from "../Containers/ContainerFluid";
import Link from "../Link/Link";
import Frame from "../Vector/Frame";

function Slider({ items }) {
	const mobile = useMediaQuery("(max-width: 600px)");
	SwiperCore.use([Autoplay, Navigation, Pagination]);

	const navigationPrevRef = useRef(null);
	const navigationNextRef = useRef(null);

	console.log('items', items)

	return (
		<div className='o-slider'>
			<ContainerFluid>
				<Swiper
					height={"100%"}
					breakpoints={{
						400: {
							slidesPerView: 1,
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
									mobile={mobile}
									projectId={item.id}
									artistName={item.Title}
									projectTitle={item.Subtitle}
									credit={item.FeatureImage.data.attributes.caption}
									src={item.FeatureImage.data.attributes.url}
									alt={item.FeatureImage.data.attributes.alternativeText}
								/>
							</SwiperSlide>
						))}
				</Swiper>
				{/* {mobile && (
					<Box
						sx={{ width: "100%" }}
						display='flex'
						alignItems={"center"}
						justifyContent='center'
						mt={4}
					>
						<ArrowButton ref={navigationPrevRef} />
						<ArrowButton ref={navigationNextRef} rotation={"180"} />
					</Box>
				)} */}
				{/* {!mobile && (
					<nav className='o-slider_nav'>
						<ArrowButton ref={navigationPrevRef} />
						<ArrowButton ref={navigationNextRef} rotation={"180"} />
					</nav>
				)} */}
			</ContainerFluid>
		</div>
	);
}

function Item({
	src,
	alt,
	projectId,
	projectTitle,
	artistName,
	mobile,
	credit,
}) {
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
		backgroundColor: "rgba(7, 7, 7, 0.49)",
		opacity: 0,
		transition: "600ms ease",
		h6: {
			transition: "600ms ease",
		},
	};

	const credits = {
		color: "black",
		height: "10%",
		display: "flex",
		alignItems: "center",
		justifyContent: "flex-start",
	};

	const itemStyles = theme => ({
		height: "40vw",
		".c-frame": {
			transform: "rotate(-10deg) scale(0.8)",
		},
		".c-link": {
			height: "100%",
			width: "100%",
		},
		[theme.breakpoints.down("sm")]: {
			height: "80vw !important",
		},
		"&:hover .info_desktop h6": {
			opacity: 1,
			transform: `translateY(0)`,
		},
		"&:hover .info_desktop": {
			opacity: 1,
		},
	});

	const imgWrapper = {
		position: "relative",
		height: "90%",
		width: "100%",
		img: {
			width: "100%",
			height: "100%",
			objectFit: "cover",
			filter: "grayscale(1)",
		},
		".c-frame": {
			transform: "scale(1.03)",
		},
	};

	return (
		<Box sx={itemStyles} className=' -hover-frame'>
			<Link classes='o-slider_item' isRouterLink href={`/projects`}>
				<Box className='image-wrapper' sx={imgWrapper}>
					<Box component='img' src={src} alt={alt}></Box>
					<Box className='info_desktop' sx={desktopInfoStyles} p={2}>
						<Typography
							className='info_desktop--artist'
							variant='h6'
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
							variant='h6'
							sx={{
								alignSelf: "flex-end",
								transform: "translateY(120%)",
								opacity: 0,
							}}
						>
							{projectTitle}
						</Typography>
					</Box>
					<Frame />
				</Box>
				<Box className='temp-credits' sx={credits}>
					<Typography variant='body2' component='p'>
						{credit}
					</Typography>
				</Box>

				{mobile && (
					<Box className='info_mobile'>
						<Typography
							variant='h5'
							component='p'
							textAlign='left'
							className='info_mobile--title'
						>
							{projectTitle}
						</Typography>
						<Typography
							variant='h5'
							component='p'
							textAlign='left'
							className='info_mobile--artist'
						>
							{artistName}
						</Typography>
					</Box>
				)}
			</Link>
		</Box>
	);
}

export default Slider;
