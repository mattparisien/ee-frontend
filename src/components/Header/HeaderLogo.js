import React from "react";
import Link from "../Link/Link";
import { TextLogo } from "../Vector/Svg";

function HeaderLogo({menuActive}) {
	return (
		<div className='HeaderLogo w-[150px]'>
			<Link isRouterLink href={"/"}>
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
