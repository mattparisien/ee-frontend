import React from "react";
import Heading from "../Heading/Heading";
import SocialList from "../Lists/SocialList";

function FooterBottom({pathname}) {
	return (
		<div className='FooterBottom pt-4 pb-4 flex justify-between items-end md:items-center h-28'>
			<span className="brand">The Eyes & Ears Agency</span>
			<SocialList color={pathname === "/contact" ? "dark" : "light"} />
		</div>
	);
}

export default FooterBottom;
