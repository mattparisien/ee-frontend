import React, { forwardRef } from "react";
import styled from "styled-components";

const StyledHeader = styled.header`
width: 100%;
height: 100px;
position: fixed;
top: 0;
left: 0;
display: flex;
align-items: center;
justify-content: space-between;
padding: ${({ $headerStyles }) => $headerStyles.padding};
z-index: 99999;


.logo-wrapper {
  width: 200px;

  a {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

#header-logo {
  width: 100%;
  height: 100%;
  transition: 300ms ease;
};

nav {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  
  

  ul {
    li {
      display: inline;

      &:not(:last-of-type) {
        padding-right: 8rem;
      };

      a {
        position: relative;
        text-decoration: none;
        color: $dark;
        font-size: 1.4rem;
      };
    }; 
  };

};
`;

export { StyledHeader };
