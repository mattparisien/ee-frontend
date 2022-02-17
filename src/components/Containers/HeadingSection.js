import React from "react";
import { Heading } from "..";
import styled from "styled-components";

const StyledHeadingSection = styled.div`
	height: ${({ height }) => height};
	display: flex;
	align-items: center;

	${({ splitGraphicOffset }) => {
		return (
			splitGraphicOffset &&
			`

			.heading-section-graphic-wrapper {
				position: absolute;
				${splitGraphicOffset}: 0;
			}

			`
		);
	}}
`;

function HeadingSection(props) {
	return (
		<StyledHeadingSection className='heading-section' {...props}>
			<Heading
				color={props.color}
				large={props.headingSize === "large"}
				small={props.headingSize === "small"}
				weight={props.headingWeight}
				capitalize={props.capitalize}
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
