import Layout from "../components/Layout/Layout";
import "../styles/css/globals.css";
import "../styles/scss/main.scss";

function MyApp({ Component, pageProps }) {
	return (
		<Layout>
			<Component {...pageProps} />;
		</Layout>
	);
}

export default MyApp;
