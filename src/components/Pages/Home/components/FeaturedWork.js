import React, { useEffect, useState, useRef, useContext } from "react";
import { Container } from "../../../index";
import { device, deviceSize } from "../../../styles/device";
import { Link } from "react-router-dom";
import { DataContext } from "../../../Containers/Temp/Authenticated";
import HeadingSection from "../../../Containers/HeadingSection";
import styled from "styled-components";
import { LineYellow, LineBlue, LineRed, LineGreen } from "../../../Vector/Svg";
import ImageList from "../../../ImageList/ImageList";

function FeaturedWork(props) {
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

		data.posts &&
			setFeaturedPosts(
				data.posts.slice(0, 4).map(post => {
					return {
						id: post.id,
						title: post.title,
						subtitle: post.subtitle,
						image: {
							src: post.media.featureImage.url,
							alt: post.media.featureImage.altText,
						},
					};
				})
			);
	}, [data]);

	useEffect(() => {
		console.log(featuredPosts);
	}, [featuredPosts]);

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

	// const renderedPosts =
	// 	featuredPosts &&
	// 	featuredPosts.map(post => {
	// 		return (
	// 			<li key={post.id} className='featured-work-uoList__item'>
	// 				<div className='inner' key={Math.random().toString(36).substr(2, 9)}>
	// 					<div
	// 						key={Math.random().toString(36).substr(2, 9)}
	// 						className='featured-work-uoList__image'
	// 					>
	// 						<img
	// 							src={post.media.featureImage.url}
	// 							alt={post.media.featureImage.altText}
	// 						></img>
	// 					</div>

	// 					<Link
	// 						className='linkable-frame'
	// 						to={`/posts/${Math.random().toString(36).substr(2, 9)}`}
	// 						key={Math.random().toString(36).substr(2, 9)}
	// 					>
	// 						<div
	// 							className='decorative-line decorative-line-yellow'
	// 							key={Math.random().toString(36).substr(2, 9)}
	// 						>
	// 							<LineYellow key={Math.random().toString(36).substr(2, 9)} />
	// 						</div>
	// 						<div
	// 							className='decorative-line decorative-line-red'
	// 							key={Math.random().toString(36).substr(2, 9)}
	// 						>
	// 							<LineRed key={Math.random().toString(36).substr(2, 9)} />
	// 						</div>
	// 						<div
	// 							className='decorative-line decorative-line-green'
	// 							key={Math.random().toString(36).substr(2, 9)}
	// 						>
	// 							<LineGreen key={Math.random().toString(36).substr(2, 9)} />
	// 						</div>
	// 						<div
	// 							className='decorative-line decorative-line-blue'
	// 							key={Math.random().toString(36).substr(2, 9)}
	// 						>
	// 							<LineBlue key={Math.random().toString(36).substr(2, 9)} />
	// 						</div>
	// 						<div
	// 							className='featured-work-uoList__title'
	// 							key={Math.random().toString(36).substr(2, 9)}
	// 						>
	// 							<div
	// 								className='title'
	// 								key={Math.random().toString(36).substr(2, 9)}
	// 							>
	// 								{post.title}
	// 							</div>
	// 							<div
	// 								className='background'
	// 								key={Math.random().toString(36).substr(2, 9)}
	// 							></div>
	// 						</div>
	// 					</Link>
	// 				</div>
	// 			</li>
	// 		);
	// 	});

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

			<ImageList listItems={featuredPosts} />
		</Container>
	);
}

export default FeaturedWork;
