import React, { forwardRef } from "react";
import styled from "styled-components";

const StyledGrid = styled.div`
	display: grid;
  min-height: 100vh;
	grid-template-columns: repeat(
		${({ $gridStyles }) => $gridStyles.columns},
		1fr
	);
  grid-template-rows: repeat(5, 20vw);
	grid-gap: 3vw;

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

   
 
  };
`;

export default StyledGrid;
