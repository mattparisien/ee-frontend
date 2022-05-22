import React from "react";
import Heading from "../Heading/Heading";
import FooterLogo from "./FooterLogo";
import { useMediaQuery } from "@mui/material";

function FooterCenter({ heading, email }) {
	const matches = useMediaQuery("(max-width: 769px)");

	return (
		<div className='FooterCenter flex flex-col md:flex-row items-center justify-between w-full'>
			<div className='flex flex-col'>
				<Heading level={1} wrapperClasses={"text-center md:text-left"}>
					{heading}
				</Heading>
				<div className="email md:text-xl text-center md:text-left mt-5">
					<a href={`mailto:${email}`}>{email}</a>
				</div>
			</div>
			<FooterLogo />
		</div>
	);
}

export default FooterCenter;
