import { useQuery } from "@apollo/client";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PinterestIcon from "@mui/icons-material/Pinterest";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import {
	List, ListItem, ListItemButton, ListItemIcon
} from "@mui/material";
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

function SocialList({ color, direction }) {
	const { loading, error, data } = useQuery(SOCIALACCOUNTS);

	const listWrapper = theme => ({
		display: "flex",
		flexDirection: direction || "row",
		svg: {
			fill: theme.palette.primary[color],
		},

		[theme.breakpoints.down("sm")]: {
			flexDirection: "column",
			".fade-child-wrap:not(:last-of-type) li": {
				marginBottom: theme.spacing(3),
			},
		},
	});

	return (
		!error &&
		!loading &&
		data && (
			<List disablePadding sx={listWrapper}>
				{data.socials.data.map((account, i) => (
					<ListItem disablePadding key={i}>
						<ListItemButton
							disableTouchRipple
							component='a'
							href={account.attributes.Url}
							target='_blank'
							rel='noreferrer'
							sx={{
								padding: 0,
								"&:hover": { opacity: 0.5 },
								transition: "300ms ease",
							}}
						>
							<ListItemIcon sx={{ justifyContent: "flex-end" }}>
								{React.createElement(
									iconMap[account.attributes.Name.toLowerCase()]
								)}
							</ListItemIcon>
						</ListItemButton>
					</ListItem>
				))}
			</List>
		)
	);
}

export default SocialList;
