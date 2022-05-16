import React from 'react'
import {Button} from "react-router-dom";

function ButtonLink({children}) {
  return (
    <Button>
      {children}
    </Button>
  )
}

export default ButtonLink