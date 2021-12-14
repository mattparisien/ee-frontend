import styled from "styled-components";
import { device } from "./device";

const StyledParagraph = styled.div`
  

	${({ $size, $indent }) => {

    

		return (
			$size === "medium" &&
			`

       ${$indent && `text-indent: 20%`};

        @media ${device.mobileS} {
          font-size: 1.6rem;
          
          & p {
            line-height: 1.9rem;
          }
        };
      
        @media ${device.mobileM} {
          font-size: 1.8rem;

          & p {
            line-height: 2.3rem;
          }
        };
      
        @media ${device.mobileL} {
          font-size: 2rem;

          & p {
            line-height: 2.6rem;
          }
        };


        @media (min-width: 680px) {
          font-size: 2.3em;

          & p {
            line-height: 2.7rem;
          }

        }

        @media ${device.tablet} {
          font-size: 2.6rem;
          

          & p {
            line-height: 3rem;
          }
        };

      
        @media ${device.laptop} {
          font-size: 2.6rem;

          & p {
            line-height: 2.9rem;
          }    
        };

    
        @media ${device.laptopL} {
          font-size: 3.3rem;

          & p {
            line-height: 3.8rem;
          }
          
        };

      
        @media ${device.desktop} {
          font-size: 3.2rem;

          & p {
            line-height: 3.3rem;
          }
        };


      
        @media (min-width: 2500px) {
          font-size: 5rem;

          & p {
            line-height: 5.2rem;
          }
        };
      `
		) ||

    $size === "small" && 
    `
    ${$indent && `text-indent: 20%`};

        margin-left: auto;
        margin-top: 50vw;
        display: block;
        width: 35vw;

        @media ${device.mobileS} {
          font-size: 1.6rem;
          
          & p {
            line-height: 1.9rem;
          }
        };
      
        @media ${device.mobileM} {
          font-size: 1.5rem;
          width: 100%;

          & p {
            line-height: 2.1rem;
          }
        };
      
        @media ${device.mobileL} {
          font-size: 1.7rem;
          width: 70vw;
          & p {
            line-height: 2rem;
          }
        };


        @media (min-width: 680px) {
          font-size: 1.6rem;
          width: 55vw;

          & p {
            line-height: 1.9rem;
          }

        }

        @media ${device.tablet} {
          font-size: 1.6rem;
          width: 50vw;

          & p {
            line-height: 1.9rem;
          }

          
        };

      
        @media ${device.laptop} {
          width: 45vw;
          font-size: 1.7rem;

          & p {
            line-height: 2.2rem;
          }
          
        };

    
        @media ${device.laptopL} {
          font-size: 1.9rem;

          & p {
            line-height: 2rem;
          }
          
        };

      
        @media ${device.desktop} {
          width: 35vw;
          font-size: 2rem;

          & p {
            line-height: 2.3rem;
          }
        };


      
        @media (min-width: 2500px) {
          font-size: 2.3rem;

          & p {
            line-height: 2.3rem;
          }
        };
    `
	}}




`;

export { StyledParagraph };
