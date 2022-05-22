import { Box, Typography } from "@mui/material";
import React, { useMemo, useState } from "react";
import InstaPostHeader from "./InstaPostHeader";
import InstaPostFooter from "./InstaPostFooter";
import Carousel from "../Carousel/Carousel";
import Media from "../Media/Media";
import VerifiedBadge from "./assets/verified.png";
import getInstaData from "./utils/getInstaData";

function InstaPost(props) {
	const [post, setPost] = useState(null);

	useMemo(() => {
		if (props.MyPostUrl) {
			const getPost = async () => {
				const data = await getInstaData(props.MyPostUrl);

				if (!data || !data.items || !data.items[0]) {
					return null;
				}

				if (data && data.items.length > 1) {
					setPost({
						component: (
							<Carousel
								linkable={false}
								items={data.items.map(x => ({
									resource_type: x.media_type,
									url: x.url,
									alt: x.alt,
									aspect: data.items[0].aspect || "square",
								}))}
							/>
						),
						caption: data.caption,
					});
				} else if (data.items.length === 1) {
					setPost({
						component: (
							<Media
								aspect={"portrait"}
								resource_type={data.items[0].media_type}
								url={data.items[0].url}
								caption={data.items[0].url}
							/>
						),
						caption: data.caption || data.items[0].caption,
					});
				}
			};

			getPost();
		}
	}, [props.MyPostUrl, props.Media.data]);

	let endPointClasses = "w-full bg-white px-2 py-1";

	return (
		<div className='InstaPost sm:w-[50vw] sm:max-w-[300px] shadow-4xl rounded-xl overflow-hidden border mx-auto'>
			<InstaPostHeader
				avatar={
					props.MyPostUrl ? process.env.NEXT_PUBLIC_INSTA_DEFAULT_IMAGE : ""
				}
				classes={(endPointClasses += " min-h-12")}
			/>
			{post && post.component}
			{post && post.caption && (
				<InstaPostFooter
					classes={endPointClasses}
					handle={props.handle || `eyes__ears`}
					caption={post && post.caption}
				/>
			)}
		</div>
	);
}

export default InstaPost;
