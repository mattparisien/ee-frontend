import React, { useEffect } from 'react';
import { useLocation } from "react-router-dom";


function ProjectItem(props) {

  const location = useLocation();

  useEffect(() => {
    console.log(location)
  }, [])

  return (
    <div>
      hi
    </div>
  )
}

export default ProjectItem
