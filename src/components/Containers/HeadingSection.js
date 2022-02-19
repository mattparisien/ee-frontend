import React from "react";
import { Heading } from "..";
import styled from "styled-components";
import { responsiveGutter } from "./StyledContainer.styled";

const StyledHeadingSection = styled.div`
	height: ${({ height }) => height};
	display: flex;
	align-items: center;
	justify-content: center;

	${({ splitGraphicOffset }) => {
		return (
			splitGraphicOffset &&
			`

			.heading-section-graphic-wrapper {
				
				${splitGraphicOffset}: 0;
				width: 20vw;
				max-width: 340px;
			}

			`
		);
	}}
`;

function HeadingSection(props) {
	return (
		<StyledHeadingSection
			className='heading-section'
			{...props}
			data-scroll={props.hasScrollSpeed}
			data-scroll-speed={props.hasScrollSpeed ? -2 : 0}
		>
			<Heading
				color={props.color}
				large={props.headingSize === "large"}
				small={props.headingSize === "small"}
				weight={props.headingWeight}
				capitalize={props.capitalize}
				width={props.headingWidth}
			>
				{props.headingText}
			</Heading>
			{props.splitGraphic && (
				<div className='heading-section-graphic-wrapper'>
					{props.splitGraphic}
				</div>
			)}
		</StyledHeadingSection>
	);
}

export default HeadingSection;
