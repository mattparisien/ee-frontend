import styled from "styled-components";
import { device, deviceSize } from "../styles/device";
import { RESPONSIVECONTAINERGUTTER } from "../styles/presetStyles";

export const StyledHeading = styled.div`
${({ $headingStyles, theme }) => {
	return (
		($headingStyles.color && `color: ${theme.colors[$headingStyles.color]};`) ||
		($headingStyles.size && `font-size: ${$headingStyles.size}`)
	);
}}

h2 {
  font-size: 8vw;
  line-height: 8vw;
}
}}
`;

export const StyledParagraph = styled.div`

p {
  ${({ indent, size }) => {
		return `
      text-indent: ${
				indent && size === "medium"
					? "10vw"
					: indent && size === "small"
					? "5vw"
					: "0"
			}

      `;
	}}
}
 

	padding: ${({ offsetTop, offsetBottom }) =>
		offsetTop && RESPONSIVECONTAINERGUTTER("regular", "top")}
	position: relative;
	letter-spacing: -1px;

	.line-wrapper {
		overflow: hidden;

		&:nth-of-type(1) {
			padding-left: 20%;
		}
	}

	.fade-up-line {
		transform: translateY(100%);
		opacity: 0;
		white-space: nowrap;
	}

	.indent-title {
		font-family: "Kobe";
		font-size: 1vw;
		text-indent: 0px;
		width: 20%;
		position: absolute;
		display: flex;
		align-items: center;

		span {
			display: block;
			text-align: left;
			width: 100%;
		}
	}

	${({ size }) => {
		return `
      @media ${device.mobileS} {

        font-size: ${size === "large" && "50px"};
        ${
					size === "small" &&
					`
          font-size: 30px;
          line-height: 35px;
        `
				};
        
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

        ${
					size === "small" &&
					`
        font-size: 40px;
        line-height: 35px;
      `
				};
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
						(size === "large" &&
							`
          font-size: 4.1rem;
          p {
            line-height: 4.7rem;
          }
          
        `,
						size === "medium" &&
							`
    font-size: 2.8rem;

    p {
      line-height: 3rem;
    }
    `)
					}

        ${
					size === "small" &&
					`
        font-size: 40px;
        line-height: 35px;
      `
				};
      };


      @media ${device.laptop} {
        

        ${
					(size === "large" &&
						`
          font-size: 5rem;
          p {
            line-height: 5.5rem;
          }
        `,
					size === "medium" &&
						`
        font-size: 3rem;

        p {
          line-height: 3rem;
        }
        `)
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
        font-size: 3.9rem;

        p {
          line-height: 4.2rem;
        }
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
