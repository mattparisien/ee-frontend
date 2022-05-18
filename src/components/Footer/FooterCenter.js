import React from "react";
import Heading from "../Heading/Heading";
import FooterLogo from "./FooterLogo";
import { useMediaQuery } from "@mui/material";

function FooterCenter({ heading, email }) {
	const matches = useMediaQuery("(max-width: 769px)");

	return (
		<div className='FooterCenter flex flex-col md:flex-row items-center justify-between w-full'>
			<div className='flex flex-col'>
				<Heading level={1} textCenter wrapperClasses={"text-center"}>
					{heading}
				</Heading>
				<Heading level={matches ? 4 : 3} wrapperClasses='text-center'>
					<a href={`mailto:${email}`}>{email}</a>
				</Heading>
			</div>
			<FooterLogo />
		</div>
	);
}

export default FooterCenter;
