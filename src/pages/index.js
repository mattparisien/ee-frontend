import HomePage from "../components/templates/home/HomePage";
import Head from "next/head";

export default function Home() {
	return (
		<>
			<Head>
				<title>The Eyes and Ears Agency</title>
				<meta name='viewport' content='initial-scale=1.0, width=device-width' />
				<meta
					property='og:title'
					content='The Eyes and Ears Agency'
					key='title'
				/>
				<meta
					content='The Eyes and Ears Agency builds a bridge between the music industry and impactful non-profit organizations.'
					property='og:description'
				/>

				<meta
					content='The Eyes and Ears Agency builds a bridge between the music industry and impactful non-profit organizations.'
					name='description'
				/>
				<meta content='https://www.eyesandearsagency.com/' property='og:url' />
			</Head>
			<HomePage />
		</>
	);
}
