import React, { useRef } from 'react'
import { StyledFooter, StyledFooterBottom } from "./styles";
import { UnorderedList } from '..';
import useHoverEffect from '../../effects/LinkHover';

function NavList(props) {

  const container = useRef(null);
  const hover = useHoverEffect(container);

  return (
    <StyledFooterBottom ref={container}>
      <div className='footer-brand-name'>Eyes & Ears © 2021</div>
				<UnorderedList>{props.links}</UnorderedList>
    </StyledFooterBottom>
  )
}

export default NavList
