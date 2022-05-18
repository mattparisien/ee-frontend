import React from "react";
import Head from "next/head";

function Seo({ title, description }) {
	return (
		<Head>
			<meta charset='utf-8' />
			<link
				rel='icon'
				href='https://res.cloudinary.com/eyes-ears/image/upload/v1650222951/large_Eyes_And_Ears_Logo_Only_Image_10_990afc2573.png'
			/>
			<title>{title}</title>
			<meta name='viewport' content='initial-scale=1.0, width=device-width' />
			<meta property='og:title' content={title} key='title' />
			<meta property='og:type' content='website' />
			<meta property='og:site_name' content='The Eyes and Ears Agency' />
			<meta property='og:description' content={description} />
			<meta property='og:url' content='https://www.eyesandearsagency.com/' />
			<meta content={description} name='description' />
			<meta name='application-name' content='The Eyes and Ears Agency' />
			<meta itemprop='name' content={title} />
			<meta itemprop='description' content={description} />
			<meta
				itemprop='image'
				content={
					"https://res.cloudinary.com/eyes-ears/image/upload/v1650222951/large_Eyes_And_Ears_Logo_Only_Image_10_990afc2573.png"
				}
			/>
		</Head>
	);
}

export default Seo;
