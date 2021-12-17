import React, { useEffect, useState, useRef } from "react";
import Section from "../../../Section";
import Container from "../../../Container";
import UnorderedList from "../../../Lists/UnorderedList";
import Image from "../../../Image";
import { StyledFeaturedWork } from "../../styles";
import gsap from "gsap";
import { Link } from "react-router-dom";
import Heading from "../../../Heading";
import useMouseMove from "../../../../helpers/hooks/useMouseMove";

function FeaturedWork(props) {
	const { data } = props;
	const [location] = useMouseMove();
	const [isHovering, setHovering] = useState(false);
	const [imageUrl, setImageUrl] = useState(null);
	const imageRef = useRef(null);

	const getFeatureImageById = id => {
		let post = data[1].filter(post => post.id === id);
		let imageUrl;

		if (!post[0].attributes.FeatureImage.data) {
			return;
		}

		return (imageUrl = post[0].attributes.FeatureImage.data.attributes.url);
	};

	useEffect(() => {
		if (isHovering) {
			gsap.to(imageRef.current, {
				left: location.pageX,
				top: location.pageY,
			});
		}

		return () => {
			gsap.killTweensOf(imageRef.current);
		};
	}, [location, isHovering]);

	const handleMouseEnter = id => {
		setHovering(true);
		let imageUrl = getFeatureImageById(id);

		setImageUrl(imageUrl);
	};

	const handleMouseLeave = () => {
		setHovering(false);
		setImageUrl(null);
	};

	const featured =
		data.length > 1 &&
		data[1].map((title, index) => (
			<li key={index} className='featured-list-item'>
				<Link
					key={index}
					className='featured-list-item-link'
					to={`/projects/${title.id}`}
					onMouseEnter={() => handleMouseEnter(title.id)}
					onMouseLeave={handleMouseLeave}
				>
					<Heading large>{title.attributes.Title}</Heading>
				</Link>
			</li>
		));

	return (
		<div>
			<Section bg={"light"} classes={"section-work"}>
				<Container classes={"featured-work-container"} centerInner>
					<StyledFeaturedWork>
						<UnorderedList
							stacked
							justifyCenter
							alignCenter
							baseFontSize={"8vw"}
						>
							{featured}
						</UnorderedList>
						<div className='featured-work-free-image-wrapper' ref={imageRef}>
							<Image
								url={imageUrl}
								height={"100px"}
								width={"100px"}
								isVisible={isHovering}
							/>
						</div>
					</StyledFeaturedWork>
				</Container>
			</Section>
		</div>
	);
}

export default FeaturedWork;
