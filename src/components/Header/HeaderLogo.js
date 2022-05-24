import React from "react";
import { TextLogo } from "../Vector/Svg";
import Link from "next/Link";

function HeaderLogo({ dropdownActive, headerColor }) {
	return (
		<div className='HeaderLogo w-[150px] opacity-0'>
			<Link href={"/"}>
				<a href='/'>
					<TextLogo
						className={`transition-[fill] duration-200 ease ${
							headerColor.includes("transparent") ? "fill-light" : "fill-dark"
						}`}
					/>
				</a>
			</Link>
		</div>
	);
}

export default HeaderLogo;
