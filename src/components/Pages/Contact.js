import React from "react";
import { Section } from "../index";


function Contact(props) {

	const { addToRefs } = props;

	return (
		<>
		
		<div className="contact-page page-wrap" ref={addToRefs}>
			
			<Section classes={"-bg-dark"} />
		</div>
		</>
	);
}

export default Contact;
