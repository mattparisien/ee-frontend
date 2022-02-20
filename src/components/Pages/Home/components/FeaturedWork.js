import React, { useContext, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import HeadingSection from "../../../Containers/HeadingSection";
import { DataContext } from "../../../Containers/Temp/Authenticated";
import { Container } from "../../../index";
import { device, deviceSize } from "../../../styles/device";
import { LineBlue, LineGreen, LineRed, LineYellow } from "../../../Vector/Svg";

export const StyledFeaturedWorkList = styled.ul`
	width: 100%;
	position: relative;
	height: 160vw;

	.ul-frame {
		width: 100%;
		height: 100%;
		transform: rotate(10deg);
		position: sticky;
		z-index: -10;
		
		}

	}

	li {
		position: absolute;
		height: 54vw;
		width: 40vw;
		max-width: 795px;
		max-height: 1000px;
		border-radius: 0.7vw;
		overflow: visible;
		

		&:nth-of-type(1) {
			top: 7.5vw;
			left: 8vw;
			transform: rotate(-20deg);
		}

		&:nth-of-type(2) {
			top: 30vw;
			right: 0;
			width: 48vw;
			height: 48vw;	
		}

		&:nth-of-type(3) {
			bottom: 34vw;
			left: 30vw;
		}

		&:nth-of-type(4) {
			width: 41vw;
			height: 40vw;	
			bottom: 0;
			left: 0;
		}

	
		.inner {
			
			display: block;
			width: 100%;
			height: 100%;
			position: relative;

			.linkable-frame {
				width: 100%;
				height: 100%;
				position: absolute;
				top: 0;
				left: 0;
				transform: scale(1.1);

				.decorative-line {
					
					opacity: 0;
					transition: 300ms ease;

					@media (max-width: ${deviceSize.tablet}px) {
						display: none;
					}


				}


				@media ${device.tablet} {
					&:hover .decorative-line {
						opacity: 1;
					}
	
					&:hover .featured-work-uoList__title {
						opacity: 1;
					}
				}
			}

			

			.decorative-line-yellow {
				transform: none;
				position: absolute;
				width: 100%;
				bottom: -4vw;
				z-index: 999;

				svg {
					transform: rotate(12deg);
				}
			}
			

			.decorative-line-red {
				transform: none;
				position: absolute;
				width: 100%;
				top: -5vw;
				z-index: 999;

				svg {
					transform: rotate(12deg);
				}
			}

			.decorative-line-green {
				transform: none;
				position: absolute;
				height: 106%;
				top: 0;
				left: -6vw;
				z-index: 999;

				svg {
					transform: rotate(12deg);
				}
			}

			.decorative-line-blue {
				transform: none;
				position: absolute;
				height: 106%;
				top: -3vw;
				right: -6vw;
				z-index: 999;

				svg {
					transform: rotate(12deg);
				}
			}

			.featured-work-uoList__image {
				height: 100%;
				width: 100%;
				background-size: cover;
				background-position: center;
				border-radius: 0.7vw;
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
				padding: 3vw;
				transition: 300ms ease;
				opacity: 1;

				
				@media ${device.tablet} {
					opacity: 0;

				}


				
				.title {
					text-align: center;
					
					font-size: 5vw;
					letter-spacing: -0.2vw;
					line-height: 4vw;
					color: ${({ theme }) => theme.colors.light};
					z-index: 1;
				}

				.background {
					position: absolute;
					border-radius: 0.7vw;
					top: 0;
					left: 0;
					background-color: black;
					opacity: 0.4;
					width: 100%;
					height: 100%;
					transform: scale(-0.91);
				}
			}
		}
	}
`;

function FeaturedWork(props) {
	const [isHovering, setHovering] = useState(false);
	const [imageUrl, setImageUrl] = useState(null);
	const imageRef = useRef(null);
	const listRefs = useRef(null);
	const [featuredPosts, setFeaturedPosts] = useState(null);

	const data = useContext(DataContext);

	useEffect(() => {
		//Make sure object is sorted by od
		const sortedPosts =
			data.posts &&
			data.posts.sort(function (a, b) {
				if (a.id !== b.id) {
					return a.id - b.id;
				}
				if (a.name === b.name) {
					return 0;
				}
				return a.name > b.name ? 1 : -1;
			});

		data.posts && setFeaturedPosts(data.posts.slice(0, 4));
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
						<div className='inner'>
							<div
								className='featured-work-uoList__image'
								style={{
									backgroundImage: `url(${post.media.featureImage.url})`,
								}}
							></div>

							<Link
								className='linkable-frame'
								to={`/posts/${post.id}`}
								key={post.id}
							>
								<div className='decorative-line decorative-line-yellow'>
									<LineYellow />
								</div>
								<div className='decorative-line decorative-line-red'>
									<LineRed />
								</div>
								<div className='decorative-line decorative-line-green'>
									<LineGreen />
								</div>
								<div className='decorative-line decorative-line-blue'>
									<LineBlue />
								</div>
								<div className='featured-work-uoList__title'>
									<div className='title'>{post.title}</div>
									<div className='background'></div>
								</div>
							</Link>
						</div>
					</li>
				</>
			);
		});

	return (
		<Container
			classes={"featured-work-container"}
			centerInner
			flexDirection='column'
			noGutter
			isRelative
		>
			<Container hasPaddingVertical height='auto' centerInner hasPaddingBottom>
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
	);
}

export default FeaturedWork;
