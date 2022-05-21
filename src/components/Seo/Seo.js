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
	const seoDefaults = {
		title: "The Eyes and Ears Agency",
		description:
			"The Eyes and Ears Agency builds a bridge between the music industry and impactful non-profit organizations.",
		viewport: "initial-scale=1.0, width=device-width",
		icon: "https://res.cloudinary.com/eyes-ears/image/upload/v1650222951/large_Eyes_And_Ears_Logo_Only_Image_10_990afc2573.png",
		canonical: "https://eyesandearsagency.com/",
		keywords:
			"Eyes and Ears Agency, Social Impact, Environmentalism, Music, Artists, Non-Profit, Non-Profit Organizations",
	};

	console.log(metaImage);

	return (
		// <Head>
		// 	<link
		// 		rel='icon'
		// 		href={metaImage ? metaImage.data.attributes.url : seoDefaults.icon}
		// 	/>
		// 	<title>{metaTitle || seoDefaults.title}</title>
		// 	<meta
		// 		name='description'
		// 		content={metaDescription || seoDefaults.description}
		// 	/>
		// 	<meta name='keywords' content={keywords || seoDefaults.keywords} />

		// 	<link rel='canonical' href={canonicalURL || seoDefaults.canonical} />
		// 	<meta name='viewport' content={metaViewport || seoDefaults.viewport} />
		// 	<meta httpEquiv='content-type' content='text/html; charset=UTF-9' />
		// 	<meta
		// 		property='og:title'
		// 		content={metaTitle || seoDefaults.title}
		// 		key='title'
		// 	/>
		// 	<meta
		// 		property='og:description'
		// 		content={metaDescription || seoDefaults.description}
		// 	/>
		// 	<meta property='og:type' content='website' />
		// 	<meta property='og:site_name' content='The Eyes and Ears Agency' />

		// 	<meta property='og:url' content='https://www.eyesandearsagency.com/' />
		// 	<meta
		// 		content={metaDescription || seoDefaults.description}
		// 		name='description'
		// 	/>
		// 	<meta itemprop='name' content={metaTitle || seoDefaults.title} />
		// 	<meta
		// 		itemprop='description'
		// 		content={metaDescription || seoDefaults.description}
		// 	/>
		// 	<meta
		// 		itemprop='image'
		// 		content={metaImage ? metaImage.data.attributes.url : seoDefaults.icon}
		// 	/>
		// </Head>
		<NextSeo
			title={metaTitle}
			description={metaDescription}
			canonical={canonicalURL}
			openGraph={{
				url: canonicalURL,
				title: metaTitle,
				description: metaDescription,
				images: [
					{
						url: metaImage.data.attributes.url,
						width: metaImage.data.attributes.width,
						height: metaImage.data.attributes.height,
						alt: metaImage.data.attributes.alternativeText,
						type: metaImage.data.attributes.mime,
					},
				],
				site_name: "The Eyes and Ears Agency",
			}}
			twitter={{
				handle: null,
				site: seoDefaults.canonical,
				cardType: "summary",
			}}
		/>
	);
}

export default Seo;
