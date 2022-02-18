import React, { useEffect, useState, useRef, useContext } from "react";
import { Image, Section, Container } from "../../../index";
import UnorderedList from "../../../Lists/UnorderedList";

import gsap from "gsap";
import { Link } from "react-router-dom";
import useMouseMove from "../../../../helpers/hooks/useMouseMove";
import ScrollTrigger from "gsap/ScrollTrigger";
import useFetch from "../../../../helpers/hooks/useFetch";
import { DataContext } from "../../../../App";
import HeadingSection from "../../../Containers/HeadingSection";
import styled from "styled-components";
import { responsiveGutter } from "../../../Containers/StyledContainer.styled";
import { Frame } from "../../../Vector/Svg";

export const StyledFeaturedWorkList = styled.ul`
	width: 100%;
	height: auto;
	position: relative;
	min-height: 90vh;

	li {
		position: absolute;
		height: 40vw;
		width: 30vw;
		border-radius: 10px;

		&:nth-of-type(1) {
			top: 4vw;
			left: 7vw;
			transform: rotate(-20deg) scale(0.8);
		}

		&:nth-of-type(2) {
			top: 20vw;
			right: 5vw;
			width: 40vw;
			transform: scale(0.8);
		}

		&:nth-of-type(3) {
			bottom: 0;
			left: 13vw;
			transform: scale(0.8);
		}

		a {
			display: block;
			width: 100%;
			height: 100%;
			position: relative;

			.featured-work-uoList__image {
				height: 100%;
				width: 100%;
				background-size: cover;
			}

			.featured-work-uoList__frame {
				position: absolute;
				top: 50%;
				left: 50%;
				transform: translate(-50%, -50%);
				width: 100%;
				height: 100%;
				display: none;

			}
			
		

			.featured-work-uoList__title {
				height: 100%;
				width: 100%;
				position: absolute;
				top: 0;
				left: 0;
				display: flex;
				align-items: center;
				justify-content: center;
				padding: 1vw;
				transition: 300ms ease;
				opacity: 0;

				&:hover {
					opacity: 1;
				}

				.title {
					text-align: center;
					line-height: 8vw;
					font-size: 8vw;
					color: ${({ theme }) => theme.colors.light};
					z-index: 1;
				}

				.background {
					position: absolute;
					top: 0;
					left: 0;
					background-color: black;
					opacity: 0.3;
					width: 100%;
					height: 100%;
				}
			}
		}
	}
`;

function FeaturedWork(props) {
	const [location] = useMouseMove();
	const [isHovering, setHovering] = useState(false);
	const [imageUrl, setImageUrl] = useState(null);
	const imageRef = useRef(null);
	const listRefs = useRef(null);
	const [featuredPosts, setFeaturedPosts] = useState(null);

	const data = useContext(DataContext);

	useEffect(() => {
		console.log(data.posts && data.posts);
		data.posts && setFeaturedPosts(data.posts.slice(0, 3));
	}, [data]);

	// const handleMouseEnter = id => {
	// 	setHovering(true);
	// 	let imageUrl = getFeatureImageById(id);

	// 	setImageUrl(imageUrl);
	// };

	// const handleMouseLeave = () => {
	// 	setHovering(false);
	// 	setImageUrl(null);
	// };

	// const addToRefs = link => {
	// 	if (listRefs.current && !listRefs.current.includes(link)) {
	// 		listRefs.current.push(link);
	// 	}
	// };

	// const featured =
	// 	data &&
	// 	data[1].map((title, index) => (
	// 		<li
	// 			key={index}
	// 			className='featured-list-item'
	// 			onMouseEnter={() => handleMouseEnter(title.id)}
	// 			onMouseLeave={handleMouseLeave}
	// 		>
	// 			<Link
	// 				key={index}
	// 				className='featured-list-item-link'
	// 				to={`/projects/${title.id}`}
	// 			>
	// 				{title.attributes.Title}
	// 			</Link>
	// 		</li>
	// 	));

	// useEffect(() => {
	// 	gsap.registerPlugin(ScrollTrigger);
	// 	let proxy = { skew: 0 },
	// 		skewSetter = gsap.quickSetter(listRefs.current, "skewY", "deg"), // fast
	// 		clamp = gsap.utils.clamp(-20, 20); // don't let the skew go beyond 20 degrees.

	// 	ScrollTrigger.create({
	// 		onUpdate: self => {
	// 			let skew = clamp(self.getVelocity() / -300);
	// 			// only do something if the skew is MORE severe. Remember, we're always tweening back to 0, so if the user slows their scrolling quickly, it's more natural to just let the tween handle that smoothly rather than jumping to the smaller skew.
	// 			if (Math.abs(skew) > Math.abs(proxy.skew)) {
	// 				proxy.skew = skew;
	// 				gsap.to(proxy, {
	// 					skew: 0,
	// 					duration: 0.8,
	// 					ease: "power3",
	// 					overwrite: true,
	// 					onUpdate: () => skewSetter(proxy.skew),
	// 				});
	// 			}
	// 		},
	// 	});

	// make the right edge "stick" to the scroll bar. force3D: true improves performance
	// 	gsap.set(".skewElem", { transformOrigin: "left", force3D: true });
	// }, [listRefs.current]);

	const renderedPosts =
		featuredPosts &&
		featuredPosts.map(post => {
			return (
				<>
					<li key={post.id} className='featured-work-uoList__item'>
						<Link to={`/posts/${post.id}`}>
							<div
								className='featured-work-uoList__image'
								style={{
									backgroundImage: `url(${post.media.featureImage.url})`,
								}}
							></div>
							<div className='featured-work-uoList__title'>
								<div className='title'>{post.title}</div>
								<div className='background'></div>
							</div>
							<div className='featured-work-uoList__frame'>
								<Frame />
							</div>
						</Link>
					</li>
				</>
			);
		});

	return (
		<Section bg={"light"} classes={"section-work"}>
			<Container
				classes={"featured-work-container"}
				centerInner
				flexDirection='column'
			>
				<Container hasMarginBottom hasMarginTop height='auto' centerInner>
					<HeadingSection
						color='dark'
						headingSize='large'
						weight='light'
						width='100%'
						headingText={"Featured Work"}
					/>
				</Container>

				<StyledFeaturedWorkList className='featured-work-uoList'>
					{renderedPosts}
				</StyledFeaturedWorkList>
			</Container>
		</Section>
	);
}

export default FeaturedWork;
