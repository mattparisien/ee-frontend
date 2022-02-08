import { shuffle } from "lodash";
import styled from "styled-components";
import { shuffleColors } from "../helpers/shuffleColors";

export const StyledAccent = styled.span`
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
  stroke-width: 10px;
  bottom: 10px;
  left: 0;  
  z-index: 9999;
  opacity: 0.8;
}

.accent_line {
  height: 10px;
}

.accent-rectangle {
  height: 90%;
  width: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
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