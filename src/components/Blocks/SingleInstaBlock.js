import React from "react";
import InstaPost from "../InstaPost/InstaPost";

function SingleInstaBlock({ data }) {
	return (
		data && (
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
					alt: data.profileImage.data.attributes.alternativeText,
				}}
				handle={data.handle}
				isVerified={data && data.verifiedUser}
				caption={data.caption}
			/>
		)
	);
}

export default SingleInstaBlock;
