
import React from 'react'

function LinkComponent(props) {
  return (
    <LinkComponent to={props.to} className={props.className}>
      {props.children}
    </LinkComponent>
  )
}

export default LinkComponent
