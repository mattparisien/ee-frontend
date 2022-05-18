import React from "react";
import { TextLogo } from "../Vector/Svg";
import Link from "next/Link";

function HeaderLogo({ menuActive }) {
	return (
		<div className='HeaderLogo w-[150px]'>
			<Link href={"/"}>
				<TextLogo
					className={`transition-[fill] duration-200 ease ${
						menuActive ? "fill-light" : "fill-dark"
					}`}
				/>
			</Link>
		</div>
	);
}

export default HeaderLogo;
