import React, { useRef } from "react";
import "swiper";
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";
import "swiper/modules/pagination/pagination.min.css";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react";
import "swiper/swiper.min.css";
import ArrowButton from "../Button/ArrowButton";
import Link from "../Link/Link";
import ContainerFluid from "../Containers/ContainerFluid";

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
							slidesPerView: 1,
							spaceBetween: 40,
						},
						768: {
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
									projectTitle={item.title}
									artistName={item.subtitle}
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
	return (
		<Link classes='o-slider_item' isRouterLink href={`/projects/${projectId}`}>
			<img src={src} alt={alt}></img>
			<div className='info'>
				<div className='info_title'>{projectTitle}</div>
				<div className='info_artist'>{artistName}</div>
			</div>
		</Link>
	);
}

export default Slider;
