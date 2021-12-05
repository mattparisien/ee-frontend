import React from 'react';
import classNames from 'classnames';
import { useEffect } from 'react/cjs/react.development';
import $ from "jquery";

export default function Container(props) {

  const containerClass = classNames("object-container", props.classes)

  return (
    <div className={containerClass}>
      {props.children}
    </div>
  )
}
