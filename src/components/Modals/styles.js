import styled from "styled-components";

export const StyledCookieBar = styled.div`
  width: 100vw;
  height: 200px;
  background-color: ${({ theme }) => theme.colors.dark};
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: white;
  padding: 3rem;


`