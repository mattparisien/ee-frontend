import {
	Box,
	List,
	ListItemButton,
	ListItem,
	ListItemIcon,
} from "@mui/material";
import { useQuery } from "@apollo/client";
import SOCIALACCOUNTS from "../../api/graphql/queries/GetSocialAccounts";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import PinterestIcon from "@mui/icons-material/Pinterest";
import React from "react";

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
			"li:not(last-of-type)": {
				marginBottom: theme.spacing(3),
			},
		},
	});

	console.log('data', data)

	return (
		!error &&
		!loading &&
		data && (
			<List disablePadding sx={listWrapper}>
				{data.socials.data.map(account => (
					<ListItem disablePadding>
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
