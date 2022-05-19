import { useEffect, useState } from "react";
import Layout from "../components/Layout/Layout";
import { ACTIONS } from "../lib/actions";
import { GlobalContext } from "../lib/context";
import { defaultState } from "../lib/defaultState";
import { getNavigation } from "../lib/getNavigation";
import { getSocials } from "../lib/getSocials";
import "../styles/css/globals.css";
import "../styles/scss/main.scss";

function MyApp({ Component, pageProps }) {
	const [appState, setAppState] = useState(defaultState);

	useEffect(() => {
		getNavigation(setAppState);
		getSocials(setAppState);
	}, []);

	return (
		<GlobalContext.Provider value={{ appState, setAppState, ACTIONS }}>
			<Layout>
				<Component {...pageProps} />;
			</Layout>
		</GlobalContext.Provider>
	);
}

export default MyApp;
