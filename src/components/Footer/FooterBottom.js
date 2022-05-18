import React from "react";
import Heading from "../Heading/Heading";
import SocialList from "../Lists/SocialList";

function FooterBottom() {
	return (
		<div className='FooterBottom pt-4 pb-4 flex justify-between items-end md:items-center h-28'>
			<Heading level={5}>The Eyes & Ears Agency</Heading>
			<SocialList color='light' />
		</div>
	);
}

export default FooterBottom;
