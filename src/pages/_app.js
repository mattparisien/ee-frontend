import { useRef } from "react";
import Layout from "../components/Layout/Layout";
import "../styles/css/globals.css";
import "../styles/scss/main.scss";

function MyApp({ Component, pageProps }) {
	const scrollRef = useRef(null);

	return (
		<Layout ref={scrollRef}>
			<Component {...pageProps} />;
		</Layout>
	);
}

export default MyApp;
