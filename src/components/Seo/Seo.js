import React from "react";
import Head from "next/head";

function Seo({ title, description }) {
	return (
		<Head>
			<title>{title}</title>
			<meta name='viewport' content='initial-scale=1.0, width=device-width' />
			<meta property='og:title' content={title} key='title' />
			<meta property='og:type' content='website' />
			<meta property='og:site_name' content='The Eyes and Ears Agency' />
			<meta property='og:description' content={description} />
			<meta property='og:url' content='https://www.eyesandearsagency.com/' />
			<meta content={description} name='description' />
			<meta name='application-name' content='The Eyes and Ears Agency' />
		</Head>
	);
}

export default Seo;
