import styled from "styled-components";

export const StyledTransition = styled.div`
    position: fixed;
		top: 0;
		left: 0;
		width: 100vw;
		height: 100vh;
		z-index: 99999;
		opacity: 1;
		display: block;
    background-color: ${({ theme }) => theme.colors.yellow};
    clip-path: url(#transition-clipPath__clip);
    

    .site-transition__inner {
      display: flex;
      align-items: center;
      flex-direction: column;
      height: 100%;
    }

    #transition-clipPath__clip {
      transform: scale(0.000473, 0.0009);
      


      path {
        height: 100%;
        
      }
    }


    .transition-drawn-logo  {
      margin: 9vw 0 0 0;

      #drawn-logo {
        width: 20vw;
      }
    }

    .transition-brand-saying {
      
      margin: 0 auto;
      color: ${({ theme }) => theme.colors.dark};
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 50vw;

      .transition-brand-saying__sentence {
        text-align: center;
        text-transform: capitalize;
        font-size: 2rem;
        line-height: 2rem;

        .char {
          font-family: 'Kobe Bold';
          letter-spacing: -2px;
          transform: translateY(100%);
          opacity: 0;
        }
      }
    }
`