import React from "react";
import Heading from "../Heading/Heading";
import FooterLogo from "./FooterLogo";
import { useMediaQuery } from "@mui/material";

function FooterCenter({ heading, email, pathname }) {
	const matches = useMediaQuery("(max-width: 769px)");

	return (
		<div className='FooterCenter flex flex-col md:flex-row items-center justify-between w-full'>
			<div className='flex flex-col'>
				<Heading level={1} wrapperClasses={"text-center md:text-left"}>
					{heading}
				</Heading>
				<div className="email md:text-xl text-center md:text-left mt-5 font-semibold hover:opacity-60 transition-opacity duration-[300ms]">
					<a href={`mailto:${email}`} className="hover-underline">{email}</a>
				</div>
			</div>
			<FooterLogo color={pathname === "/contact" ? "dark" : "light"}/>
		</div>
	);
}

export default FooterCenter;
