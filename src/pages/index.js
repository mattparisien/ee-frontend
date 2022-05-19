import HomePage from "../components/templates/home/HomePage";
import Head from "next/head";
import Seo from "../components/Seo/Seo";
import axios from "axios";

export default function Home() {
	return (
		<>
			<Seo
				title='The Eyes and Ears Agency'
				description='The Eyes and Ears Agency builds a bridge between the music industry and impactful non-profit organizations.'
			/>
			<HomePage />
		</>
	);
}


