import React from 'react'
import { Box } from '@mui/material'

function ContainerVertical(props) {
  return (
    <Box className="ContainerVertical" sx={{padding: "3rem 0", height: "100%"}}>
      {props.children}
    </Box>
  )
}

export default ContainerVertical