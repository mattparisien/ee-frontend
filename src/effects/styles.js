import { shuffle } from "lodash";
import styled from "styled-components";
import { shuffleColors } from "../helpers/shuffleColors";

export const StyledAccent = styled.div`
display: inline-block;

.accent__inner {
  position: relative;
  z-index: 98;
}

.accent-line, .accent-rectangle, .accent-circle {
  fill: none;
  position: absolute;
  width: 100%;
  stroke: ${({ theme }) => shuffleColors(theme)};
  stroke-width: 8px;
  bottom: 10px;
  left: 0;  
  z-index: 99;
  opacity: 0.8;
}

.accent-line {
  bottom: 20px;
}


.accent-rectangle {
  height: 90%;
  width: 100%;
}

.accent-circle {
  height: 80%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  ellipse {
    rx:240;
  }
}
`