import React from "react";
import InstaPost from "../InstaPost/InstaPost";
import Avatar from "./assets/avatar.jpg";

function SingleInstaBlock({ data }) {
	return (
		<>
			{data && !data.myPostUrl && (
				<InstaPost
					items={
						data &&
						data.media.data.map(item => ({
							...item.attributes,
							media_type: item.attributes.providerMetadata.resourceType,
						}))
					}
					profileImage={{
						url: data.profileImage.data.attributes.url,
						alt: "instagram-avatar",
					}}
					caption={data.caption}
					handle={data.handle}
					isVerified={data && data.verifiedUser}
				/>
			)}
			{data && data.myPostUrl && (
				<InstaPost
					items={
						data &&
						data.media.items.map(item => ({
							...item,
						}))
					}
					handle={"eyes__ears"}
					profileImage={{
						url: Avatar,
						alt: "instagram-avatar",
					}}
					caption={data.caption}
				/>
			)}
		</>
	);
}

export default SingleInstaBlock;
