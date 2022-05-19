import Seo from "../components/Seo/Seo";
import HomePage from "../components/templates/home/HomePage";
import { getHome } from "../lib/getHome";

export default function Home({ home }) {
	return (
		<>
			<Seo
				title='The Eyes and Ears Agency'
				description='The Eyes and Ears Agency builds a bridge between the music industry and impactful non-profit organizations.'
			/>
			<HomePage {...home} />
		</>
	);
}

export async function getStaticProps() {
	const home = await getHome();

	return {
		props: {
			home: { ...home },
		},
	};
}
