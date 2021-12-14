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

      
        @media ${device.tablet} {
          font-size: 3.4rem;

          & p {
            line-height: 3.8rem;
          }

          
        };

  
      
        @media ${device.laptop} {
          font-size: 2.4rem;

          & p {
            line-height: 2.5rem;
          }
          
        };

 
    
        @media ${device.laptopL} {
          font-size: 3rem;

          & p {
            line-height: 3.4rem;
          }
          
        };


      
        @media ${device.desktop} {
          font-size: 5rem;

          & p {
            line-height: 5rem;
          }
        };
      `
		);
	}}
`;

export { StyledParagraph };
