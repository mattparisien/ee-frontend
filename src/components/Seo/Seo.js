import React from "react";
import Head from "next/head";

function Seo({ title, description, viewport, icon }) {
	const seoDefaults = {
		title: "The Eyes and Ears Agency",
		description:
			"The Eyes and Ears Agency builds a bridge between the music industry and impactful non-profit organizations.",
		viewport: "initial-scale=1.0, width=device-width",
		icon: "https://res.cloudinary.com/eyes-ears/image/upload/v1650222951/large_Eyes_And_Ears_Logo_Only_Image_10_990afc2573.png",
	};

	return (
		<Head>
			<meta charset='utf-8' />
			<link rel='icon' href={icon || seoDefaults.icon} />
			<title>{title || seoDefaults.title}</title>

			<meta name='viewport' content={viewport || seoDefaults.viewport} />
			<meta
				property='og:title'
				content={title || seoDefaults.title}
				key='title'
			/>
			<meta property='og:type' content='website' />
			<meta property='og:site_name' content='The Eyes and Ears Agency' />
			<meta
				property='og:description'
				content={description || seoDefaults.description}
			/>
			<meta property='og:url' content='https://www.eyesandearsagency.com/' />
			<meta
				content={description || seoDefaults.description}
				name='description'
			/>
			<meta name='application-name' content='The Eyes and Ears Agency' />
			<meta itemprop='name' content={title || seoDefaults.title} />
			<meta
				itemprop='description'
				content={description || seoDefaults.description}
			/>
			<meta itemprop='image' content={icon || seoDefaults.icon} />
		</Head>
	);
}

export default Seo;
