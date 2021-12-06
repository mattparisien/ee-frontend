import React, { forwardRef } from "react";
import styled from "styled-components";

const StyledGrid = styled.div`
	display: grid;
	min-height: 100vh;
	grid-template-columns: repeat(
		${({ $gridStyles }) => $gridStyles.columns},
		1fr
	);
	grid-template-rows: repeat(10, 20vw);
	grid-gap: 3vw;

	.project-grid-item__link {
		display: block;
		height: 100%;
		width: 100%;
		position: relative;

		.project-grid__item___content {
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
		}
	}

	& .project-grid__item {
		&__1 {
			grid-column: 1/3;
			grid-row: 1/4;
		}

		&__2 {
			grid-column: 3/5;
			grid-row: 4/5;
			transform: translateY(-14vw);
		}

		&__3 {
			grid-column: 2/4;
			grid-row: 5/8;
		}

		&__4 {
			grid-column: 1/3;
			grid-row: 8/10;
		}
	}
`;

export default StyledGrid;
