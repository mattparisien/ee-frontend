import styled from "styled-components";

const StyledFooter = styled.footer`
  background-color: ${({ theme }) => theme.colors.dark};
  color: ${({ theme }) => theme.colors.dark};
  height: 80vh;
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
      background-color: ${({ theme }) => theme.colors.dark};
    }
  }
`
export { StyledFooter }