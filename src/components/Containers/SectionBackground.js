import React from 'react'
import styled from 'styled-components'

const StyledBg = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  
  z-index: 999;
  
`

function SectionBackground() {
  return (
    <StyledBg className="SectionBackground">

    </StyledBg>
  )
}

export default SectionBackground