import React from "react";
import Heading from "../Heading";

function Contact() {
	return (
		<>
			<Heading black large type='h1'>
				Let's talk!
			</Heading>
			<span className='footer-email'>
				<a href='/' target='_blank'>
					info@eyesandears.com
				</a>
			</span>
		</>
	);
}

export default Contact;
