import React from "react";
import Heading from "../Heading/Heading";
import FooterLogo from "./FooterLogo";

function FooterCenter({ heading, email }) {
	return (
		<div className='FooterCenter flex flex-col md:flex-row items-center justify-between w-full'>
			<div className='flex flex-col'>
				<Heading level={1}>{heading}</Heading>
				<Heading level={3}>
					<a href={`mailto:${email}`} >
						{email}
					</a>
				</Heading>
			</div>
			<FooterLogo />
		</div>
	);
}

export default FooterCenter;
