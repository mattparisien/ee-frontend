import React from 'react'
import StyledGrid from './styles/StyledGrid.styles'

function Grid(props) {

  console.log(props.columns)

  const gridStyles = {
    columns: props.columns,
    rows: props.rows,
  }

  return (
    <StyledGrid className="grid-container" $gridStyles={gridStyles}>
      {props.children}
    </StyledGrid>
  )
}

export default Grid
