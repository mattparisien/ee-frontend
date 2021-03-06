import React from "react";
import Scale from "../HOC/Scale";
import { DrawnLogo } from "../Vector/Svg";

function FooterLogo({color}) {
	return (
		<div className='FooterLogo w-28 overflow-visible mt-12 md:w-44 md:mt-0'>
			<Scale>
				<DrawnLogo color={color} />
			</Scale>
		</div>
	);
}

export default FooterLogo;
