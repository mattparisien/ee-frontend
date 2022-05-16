import React from "react";
import Heading from "../Heading/Heading";
import FooterLogo from "./FooterLogo";
import SplitText from "../HOC/SplitText";

function FooterCenter({ heading, email }) {
	return (
		<div className='FooterCenter flex flex-col md:flex-row items-center justify-between w-full'>
			<div className='flex flex-col'>
				<Heading level={1}>
					<SplitText>{heading}</SplitText>
				</Heading>
				<Heading level={3}>
					<a href={`mailto:${email}`} onClick={e => e.preventDefault()}>
						<SplitText>{email}</SplitText>
					</a>
				</Heading>
			</div>
			<FooterLogo />
		</div>
	);
}

export default FooterCenter;
