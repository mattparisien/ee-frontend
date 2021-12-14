import styled from "styled-components";
import { device } from "./device";

const StyledParagraph = styled.div`
	${({ $size, $indent }) => {
		return (
			$size === "medium" &&
			`

       ${$indent && `text-indent: 20vw`};

        @media ${device.mobileS} {
          font-size: 2rem;
          line-height: 1rem;
        };
      
        @media ${device.mobileM} {
          font-size: 1.3rem;

          & p {
            line-height: 3.8rem;
          }
        };
      
        @media ${device.mobileL} {
          font-size: 3rem;

          & p {
            line-height: 2.6rem;
          }
        };


        @media (min-width: 680px) {
          font-size: 2rem;

          & p {
            line-height: 2.8rem;
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
            line-height: 2.5rem;
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
		);
	}}
`;

export { StyledParagraph };
