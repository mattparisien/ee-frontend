import React, { useEffect } from "react";
import styled from "styled-components";
import { Link } from "@mui/material";
import { LineYellow, LineRed, LineBlue, LineGreen } from "../Vector/Svg";
import { device, deviceSize } from "../styles/device";

const StyledImageList = styled.ul`
	width: 100%;
	position: relative;
	height: 160vw;
	display: flex;
	margin:

	.ul-frame {
		width: 100%;
		height: 100%;
		transform: rotate(10deg);
		position: sticky;
		z-index: -10;
		
		}

	}

	li {
		
		height: 54vw;
		width: 40vw;
		max-width: 795px;
		max-height: 1000px;
		border-radius: 0.7vw;
		overflow: visible;
		

	

	
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
				
				background-position: center;
				border-radius: 0.7vw;
				overflow: hidden;
				position: relative;
				


				img {
					
					
					position: absolute;
					top: 0;
					left: 0;
					width: 100%;
					height: 100%;
					object-fit: cover;
					top: 50%;
					left: 50%;
					transform: translate(-50%, -50%);
				}
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
	}`;

function ImageList({ listItems, className }) {
	const renderedImages =
		listItems &&
		listItems.map(item => {
			return (
				<ImageListItem
					id={item.id}
					title={item.title}
					subtitle={item.subtitle}
					imageSrc={item.image.src}
					imageAlt={item.image.altText}
				/>
			);
		});
	return (
		<StyledImageList className={`ImageList ${className ? className : ""}`}>
			{renderedImages}
		</StyledImageList>
	);
}

function ImageListItem({ id, title, subtitle, imageSrc, imageAlt }) {
	return (
		<li key={id} className='featured-work-uoList__item'>
			<div className='inner' key={Math.random().toString(36).substr(2, 9)}>
				<div
					key={Math.random().toString(36).substr(2, 9)}
					className='featured-work-uoList__image'
				>
					<img src={imageSrc} alt={imageAlt}></img>
				</div>

				<Link
					className='linkable-frame'
					to={`/posts/${Math.random().toString(36).substr(2, 9)}`}
					key={Math.random().toString(36).substr(2, 9)}
				>
					<div
						className='decorative-line decorative-line-yellow'
						key={Math.random().toString(36).substr(2, 9)}
					>
						<LineYellow key={Math.random().toString(36).substr(2, 9)} />
					</div>
					<div
						className='decorative-line decorative-line-red'
						key={Math.random().toString(36).substr(2, 9)}
					>
						<LineRed key={Math.random().toString(36).substr(2, 9)} />
					</div>
					<div
						className='decorative-line decorative-line-green'
						key={Math.random().toString(36).substr(2, 9)}
					>
						<LineGreen key={Math.random().toString(36).substr(2, 9)} />
					</div>
					<div
						className='decorative-line decorative-line-blue'
						key={Math.random().toString(36).substr(2, 9)}
					>
						<LineBlue key={Math.random().toString(36).substr(2, 9)} />
					</div>
					<div
						className='featured-work-uoList__title'
						key={Math.random().toString(36).substr(2, 9)}
					>
						<div
							className='title'
							key={Math.random().toString(36).substr(2, 9)}
						>
							{title}
						</div>
						<div
							className='background'
							key={Math.random().toString(36).substr(2, 9)}
						></div>
					</div>
				</Link>
			</div>
		</li>
	);
}

export default ImageList;