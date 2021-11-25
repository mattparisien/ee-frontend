import styled from "styled-components";

const StyledFooter = styled.footer`
  background-color: ${({ theme }) => theme.night.backgroundColor};
  color: ${({ theme }) => theme.night.color};
  height: 100vh;
  .footer-email {
    font-size: 5rem;
    position: relative;

    &::after {
      content: '';
      position: absolute;
      
      left: 0;
      bottom: 0;
      width: 100%;
      height: 1px;
      background-color: ${({ theme }) => theme.night.color};
    }
  }
`
export { StyledFooter }