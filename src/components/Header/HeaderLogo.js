import React, { useContext } from "react";
import { TextLogo } from "../Vector/Svg";
import Link from "next/link";
import { GlobalContext } from "../../lib/context";

function HeaderLogo({ headerTheme, isIntroComplete }) {
	const { appState } = useContext(GlobalContext);
	const dropdownActive = appState.dropdownActive;

	return (
		<div className='HeaderLogo w-[150px] opacity-0'>
			<Link href={"/"}>
				<a href='/'>
					<TextLogo
						className={`transition-[fill] duration-200 ease ${
							(isIntroComplete && headerTheme === "dark") || dropdownActive
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
