import React, { useContext } from "react";
import { GlobalContext } from "../../lib/context";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PinterestIcon from "@mui/icons-material/Pinterest";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import classNames from "classnames";

const iconMap = {
	instagram: InstagramIcon,
	linkedin: LinkedInIcon,
	facebook: FacebookIcon,
	twitter: TwitterIcon,
	youtube: YouTubeIcon,
	pinterest: PinterestIcon,
};

function SocialList({ direction, color }) {
	const { appState } = useContext(GlobalContext);

	const classes = classNames("SocialList flex ", {
		"flex-col md:flex-row": !direction || direction === "row",
		"flex-col": direction === "col",
	});

	return (
		<ul className={classes}>
			{appState &&
				appState.socials.map((account, i) => (
					<li key={i}>
						<a
							href={account.Url}
							target='_blank'
							rel='noreferrer'
							className='p-0 hover:opacity-50 transition transition-ease duration-300'
						>
							{React.createElement(iconMap[account.Name.toLowerCase()], {
								className: `text-${color} ${i !== 0 && "mt-3 md:ml-3 md:mt-0"}`,
							})}
						</a>
					</li>
				))}
		</ul>
	);
}

export default SocialList;
