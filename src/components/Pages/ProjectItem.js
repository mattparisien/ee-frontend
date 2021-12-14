import React, { useEffect } from 'react';
import { useLocation } from "react-router-dom";


function ProjectItem(props) {

  const location = useLocation();

  const { addToRefs } = props;

  useEffect(() => {
  }, [])

  return (
    <div className="project-item-page page-wrap" ref={addToRefs}>
      hi
    </div>
  )
}

export default ProjectItem
