import React, { useMemo } from "react";
import Carousel from "../Carousel/Carousel";
import Media from "../Media/Media";

function FullBleedMediaBlock({ data }) {
	const formattedData = useMemo(() => {
		if (data.MediaItem.InstaPost) {
		} else if (
			data.MediaItem.MediaUpload.Media.data &&
			data.MediaItem.MediaUpload.Media.data.length > 1
		) {
			return (
				<Carousel
					linkable={false}
					items={data.MediaItem.MediaUpload.Media.data.map((item, i) => {
						return {
							url: item.attributes.url,
							alt: item.attributes.alternativeText,
							resource_type: item.attributes.provider_metadata.resource_type,
							cloudinaryId: item.attributes.provider_metadata.public_id,
							mime: item.attributes.mime,
							caption: item.attributes.caption,
						};
					})}
				/>
			);
		} else {
			return (
				<Media
					resource_type={
						data.MediaItem.MediaUpload.Media.data[0].attributes
							.provider_metadata.resource_type
					}
					url={data.MediaItem.MediaUpload.Media.data[0].attributes.url}
					alt={
						data.MediaItem.MediaUpload.Media.data[0].attributes.alternativeText
					}
					format='landscape'
					cloudinaryId={
						data.MediaItem.MediaUpload.Media.data[0].attributes
							.provider_metadata.public_id
					}
				/>
			);
		}
	});

	return formattedData;
}

export default FullBleedMediaBlock;
