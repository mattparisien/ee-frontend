import Seo from "../components/Seo/Seo";
import HomePage from "../components/templates/home/HomePage";
import { getHome } from "../lib/getHome";

export default function Home({ home }) {
	return (
		<>
			{<Seo {...home.seo} />}
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
