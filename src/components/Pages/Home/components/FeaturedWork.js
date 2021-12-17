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
import ImageMesh from "../../../Canvas/ImageMesh";
import { Scroll } from "react-locomotive-scroll";
import ScrollTrigger from "gsap/ScrollTrigger";

function FeaturedWork(props) {
	const { data } = props;
	const [location] = useMouseMove();
	const [isHovering, setHovering] = useState(false);
	const [imageUrl, setImageUrl] = useState(null);
	const imageRef = useRef(null);
	const listRefs = useRef(null);
	listRefs.current = [];

	const getFeatureImageById = id => {
		let post = data[1].filter(post => post.id === id);

		let imageUrl;

		if (!post[0].attributes.FeatureImage.data) {
			return;
		}

		imageUrl = post[0].attributes.FeatureImage.data.attributes.url;
		console.log(imageUrl);
		return imageUrl;
	};

	useEffect(() => {
		if (isHovering) {
			gsap.to(imageRef.current, {
				opacity: 1,
				left: location.pageX,
				top: location.pageY,
			});
		}

		if (!isHovering) {
			gsap.to(imageRef.current, {
				opacity: 0,
				duration: 0.3,
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

	const addToRefs = link => {
		if (listRefs.current && !listRefs.current.includes(link)) {
			listRefs.current.push(link);
		}
	};

	const featured =
		data.length > 1 &&
		data[1].map((title, index) => (
			<li
				key={index}
				className='featured-list-item'
				onMouseEnter={() => handleMouseEnter(title.id)}
				onMouseLeave={handleMouseLeave}
				ref={addToRefs}
			>
				<Link
					key={index}
					className='featured-list-item-link'
					to={`/projects/${title.id}`}
				>
					<Heading large>{title.attributes.Title}</Heading>
				</Link>
			</li>
		));

	useEffect(() => {
		console.log(listRefs, 'hi');
		gsap.registerPlugin(ScrollTrigger);
		let proxy = { skew: 0 },
			skewSetter = gsap.quickSetter(listRefs.current, "skewY", "deg"), // fast
			clamp = gsap.utils.clamp(-20, 20); // don't let the skew go beyond 20 degrees.

		ScrollTrigger.create({
			onUpdate: self => {
				let skew = clamp(self.getVelocity() / -300);
				// only do something if the skew is MORE severe. Remember, we're always tweening back to 0, so if the user slows their scrolling quickly, it's more natural to just let the tween handle that smoothly rather than jumping to the smaller skew.
				if (Math.abs(skew) > Math.abs(proxy.skew)) {
					proxy.skew = skew;
					gsap.to(proxy, {
						skew: 0,
						duration: 0.8,
						ease: "power3",
						overwrite: true,
						onUpdate: () => skewSetter(proxy.skew),
					});
				}
			},
		});

		// make the right edge "stick" to the scroll bar. force3D: true improves performance
		gsap.set(".skewElem", { transformOrigin: "right center", force3D: true });
	}, [listRefs]);

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
						{/* <div className='featured-work-free-image-wrapper' ref={imageRef}>
							<Image
								url={imageUrl}
								height={"100px"}
								width={"100px"}
								isVisible={isHovering}
							/>
						</div> */}
						<ImageMesh />
					</StyledFeaturedWork>
				</Container>
			</Section>
		</div>
	);
}

export default FeaturedWork;
