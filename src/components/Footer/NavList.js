import React from 'react'
import { StyledFooter, StyledFooterBottom } from "./styles";
import UnorderedList from '../Lists/UnorderedList';

function NavList(props) {
  return (
    <StyledFooterBottom>
      <div className='footer-brand-name'>Eyes & Ears © 2021</div>
				<UnorderedList>{props.links}</UnorderedList>
    </StyledFooterBottom>
  )
}

export default NavList
