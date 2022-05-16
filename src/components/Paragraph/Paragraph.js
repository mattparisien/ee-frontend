import React from "react";

function Paragraph({ children, size }) {

  const classes = {
    large: "text-xl md:text-3xl mb-2.5 md:mb-5",
		small: "text-xl"
  }

	return (
		<div className='Paragraph'>
			<p className={classes[size]}>{children}</p>
		</div>
	);
}

export default Paragraph;
