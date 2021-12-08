import React, { forwardRef } from "react";
import styled from "styled-components";
import {deviceSize} from "./device";

const StyledViewportNav = styled.div`
	height: 100vh;
	width: 100%;
	z-index: 9999;
	background-color: white;
	display: flex;
	align-items: center;
	justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  


  .viewport-nav__inner {
    height: 100%;
    width: 100%;

    ul {

      width: 70%;
      max-width: 1000px;
      
      
      li {

        &:nth-child(even) {
          text-align: right;
          @media (max-width: ${deviceSize.mobileL}px) {
            text-align: left;
          }
  
        };

        
        a {
          text-transform: uppercase;
          font-size: 14vw;
          letter-spacing: -0.6vw;


          @media (min-width: ${deviceSize.laptopL}px) {
            font-size: 200px;
          }

          @media (max-width: ${deviceSize.mobileL}px) {
            font-size: 17vw;
          }
        }
      }
    }

 
  }

`;

export { StyledViewportNav };
