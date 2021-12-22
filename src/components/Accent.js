import React from 'react'

function Accent(props) {

  const accentStyle = {
    display: "inline-block"
  }

  return (
    <div className="accent-wrapper" style={accentStyle}>
      {props.children}
    </div>
  )
}

export default Accent
