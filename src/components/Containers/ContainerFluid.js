import classNames from "classnames";
import React, { forwardRef } from "react";
import styled from "styled-components";

import { device } from "../styles/device";
import { Box } from "@mui/system";

const StyledContainer = styled(Box)`
	height: 100%;
	width: 100%;
	max-width: 1280px;
	
	margin: 0 auto;

	@media ${device.mobileS} {
		padding-left: 1.3rem;
		padding-right: 1.3rem;
	}

	@media ${device.mobileL} {
		padding-left: 3rem;
		padding-right: 3rem;
	}

	@media ${device.tablet} {
		padding-left: 5rem;
		padding-right: 5rem;
	}

	@media ${device.laptop} {
		padding-left: 9.5rem;
		padding-right: 9.5rem;
	}

	@media ${device.laptopL} {
		padding-left: 11rem;
		padding-right: 11rem;
	}

	@media ${device.desktop} {
		padding-left: 11rem;
		padding-right: 9rem;
	}

	@media ${device.desktopL} {
		padding-left: 12rem;
		padding-right: 12rem;
	}
`;

function ContainerFluid(props, ref) {
	const containerClass = classNames("Container", props.classes);

	return (
		<StyledContainer {...props} className='Container'>
			{props.children}
		</StyledContainer>
	);
}

export default forwardRef(ContainerFluid);
