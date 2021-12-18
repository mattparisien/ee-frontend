import React from "react";
import { Heading } from "..";
import { StyledContactFooterInner } from "./styles";

function Contact() {
	return (
		<StyledContactFooterInner className="contact-footer-inner">
			<Heading white large type='h1'>
				Contact
			</Heading>
			<Heading small white>
				info@eyesandears.com
			</Heading>
			<span className='footer-email'>
				<a href='/' target='_blank'>
					info@eyesandears.com
				</a>
			</span>
		</StyledContactFooterInner>
	);
}

export default Contact;
