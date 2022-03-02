import React from "react";
import { Box } from "@mui/material";
import Paragraph from "../Text/Paragraph";
import styled from "styled-components";

const SplitLayoutContainer = styled(Box)`
	display: flex;
	align-items: center;
	justify-content: space-between;
	flex-direction: ${({ textLocation }) =>
		textLocation === "left" ? "row" : "row-reverse"};
		.SplitLayout__graphic-wrapper		 {
			display: none;
		}
		
`;

function SplitLayout({ paragraphText, graphic, textLocation }) {
	return (
		<SplitLayoutContainer className='SplitLayout' textLocation={textLocation}>
			<Box className='SplitLayout__paragraph-wrapper'>
				<Paragraph>{paragraphText}</Paragraph>
			</Box>
			<Box className='SplitLayout__graphic-wrapper'>{graphic}</Box>
		</SplitLayoutContainer>
	);
}

export default SplitLayout;
