import styled from "styled-components";

export const StyledHero = styled.div`
	#hero-amperstand {
		overflow: hidden;

    .amperstand-inner {
      transform: translateY(100%);


      #amperstand {
        fill: ${({ theme }) => theme.colors.yellow};
        height: 30vw;
        max-height: 600px;
      }
    }
	}
`;
