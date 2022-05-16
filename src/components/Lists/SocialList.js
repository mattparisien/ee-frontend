import { useQuery } from "@apollo/client";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PinterestIcon from "@mui/icons-material/Pinterest";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import classNames from "classnames";
import React from "react";
import SOCIALACCOUNTS from "../../api/graphql/queries/GetSocialAccounts";

const iconMap = {
	instagram: InstagramIcon,
	linkedin: LinkedInIcon,
	facebook: FacebookIcon,
	twitter: TwitterIcon,
	youtube: YouTubeIcon,
	pinterest: PinterestIcon,
};

function SocialList({ direction }) {
	const { loading, error, data } = useQuery(SOCIALACCOUNTS);

	const classes = classNames("SocialList flex ", {
		"flex-col md:flex-row": !direction || direction === "row",
		"flex-col": direction === "col",
	});

	return (
		!error &&
		!loading &&
		data && (
			<ul className={classes}>
				{data.socials.data.map((account, i) => (
					<li key={i}>
						<a
							href={account.attributes.Url}
							target='_blank'
							rel='noreferrer'
							className='p-0'
						>
							{React.createElement(
								iconMap[account.attributes.Name.toLowerCase()],
								{ className: `text-light ${i !== 0 && "mt-3 md:ml-3 md:mt-0"}` }
							)}
						</a>
					</li>
				))}
			</ul>
		)
	);
}

export default SocialList;
