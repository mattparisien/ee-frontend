import React, { useEffect, useState, useRef, useContext } from "react";
import { Container } from "../../../index";
import { DataContext } from "../../../Containers/Temp/Authenticated";
import HeadingSection from "../../../Containers/HeadingSection";
import ImageList from "../../../ImageList/ImageList";
import styled from "styled-components";
import { formatImageList } from "../../../../helpers/formatData";

const StyledFeaturedWorkImageList = styled(ImageList)`
	li {
		position: absolute;
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
	}
`;

function FeaturedWork(props) {
	const [featuredPosts, setFeaturedPosts] = useState(null);
	const data = useContext(DataContext);

	useEffect(() => {
		data.posts && setFeaturedPosts(formatImageList(data.posts.slice(0, 4)));
	}, [data]);

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

			<StyledFeaturedWorkImageList
				listItems={featuredPosts}
				className='featured-work-image-list'
			/>
		</Container>
	);
}

export default FeaturedWork;
