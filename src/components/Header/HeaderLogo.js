import React from "react";
import { TextLogo } from "../Vector/Svg";
import Link from "next/link";

function HeaderLogo({ headerTheme, isIntroComplete }) {
	return (
		<div className='HeaderLogo w-[150px] opacity-0'>
			<Link href={"/"}>
				<a href='/'>
					<TextLogo
						className={`transition-[fill] duration-200 ease ${
							isIntroComplete && headerTheme === "dark"
								? "fill-light"
								: "fill-dark"
						}`}
					/>
				</a>
			</Link>
		</div>
	);
}

export default HeaderLogo;
