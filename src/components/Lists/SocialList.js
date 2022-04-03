import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import React, { useContext } from "react";
import { DataContext } from "../../context/Context";
import List from "./List";

function SocialList() {
	const components = {
		linkedin: LinkedInIcon,
		facebook: FacebookIcon,
		instagram: InstagramIcon,
		twitter: TwitterIcon,
	};

	const data = useContext(DataContext);

	const socialData =
		data &&
		data.socials &&
		data.socials.map(account => ({
			...account,
			component: components[account.name.toLowerCase()],
		}));

	return <List items={socialData} classes="c-list_social" variant='icon' />;
}

export default SocialList;
