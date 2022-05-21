import React from "react";
import Head from "next/head";
import { NextSeo } from "next-seo";

function Seo({
	metaTitle,
	metaDescription,
	metaViewport,
	metaImage,
	keywords,
	canonicalURL,
}) {
	return (
		<NextSeo
			title={null}
			description={metaDescription}
			canonical={canonicalURL}
			openGraph={{
				url: canonicalURL,
				title: null,
				description: metaDescription,
				images: metaImage
					? [
							{
								url: metaImage.data.attributes.url,
								width: metaImage.data.attributes.width,
								height: metaImage.data.attributes.height,
								alt: metaImage.data.attributes.alternativeText,
								type: metaImage.data.attributes.mime,
							},
					  ]
					: null,
				site_name: "The Eyes and Ears Agency",
			}}
			twitter={{
				handle: null,
				site: "https://www.eyesandearsagency.com/",
				cardType: "summary",
			}}
			additionalMetaTags={[
				{
					property: "keywords",
					content: keywords,
				},
			]}
		/>
	);
}

export default Seo;
