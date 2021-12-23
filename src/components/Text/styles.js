import styled from "styled-components";
import { device, deviceSize } from "../styles/device";

export const StyledHeading = styled.div`
${({ $headingStyles, theme }) => {
	return (
		($headingStyles.color && `color: ${theme.colors[$headingStyles.color]};`) ||
		($headingStyles.size && `font-size: ${$headingStyles.size}`)
	);
}}
}}
`;

export const StyledParagraph = styled.div`
	position: relative;
	letter-spacing: -1px;
	margin: ${({ margin }) => margin && margin};

	.line-wrapper {
		overflow: hidden;
	}

  .fade-up-line {
    transform: translateY(-100%);
    opacity: 0;
  }

	.indent-title {
		text-indent: 0px;
		width: 20%;
		position: absolute;
		display: flex;
		align-items: center;
		${({ $indentStyles }) => {
			return `
      font-size: ${$indentStyles.fontSize}px;
      height: ${$indentStyles.height}px;
      `;
		}}

		span {
			display: block;
			text-align: left;
			width: 100%;
		}
	}

	${({ size }) => {
		return `
      @media ${device.mobileS} {

        font-size: ${size === "large" && "50px"}
        
      };


      @media ${device.mobileM} {
        ${
					size === "large" &&
					`
          font-size: 8vw;
          
          p {
            line-height: 10vw;
          }
          
        `
				}
      };


      @media  ${device.mobileL} {
        
        
        ${
					size === "large" &&
					`
          font-size: 8vw;
          p {
            line-height: 10.5vw;
          }
          
        `
				}
      };


      @media  ${device.tablet} {

          ${
						size === "large" &&
						`
          font-size: 4.1rem;
          p {
            line-height: 4.7rem;
          }
          
        `
					}
      };


      @media ${device.laptop} {
        

        ${
					size === "large" &&
					`
          font-size: 5rem;
          p {
            line-height: 5.5rem;
          }
          
        `
				}

      };
     
      


      @media  ${device.desktop} {

        ${
					(size === "large" &&
						`
          font-size: 5.4rem;
          p {
            line-height: 6.5rem;
          }
          
        `,
					size === "medium" &&
						`
          
        `)
				}

      };


      ${device.desktopL} {
        ${
					size === "large" &&
					`
          font-size: 5.9rem;
          p {
            line-height: 5.9rem;
          }
          
        `
				}
      };
      `;
	}}
`;
