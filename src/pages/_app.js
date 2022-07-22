import { useEffect, useState } from "react";
import Layout from "../components/Layout/Layout";
import { GlobalContext } from "../lib/context";
import { defaultState } from "../lib/defaultState";
import { getNavigation } from "../lib/getNavigation";
import { getSocials } from "../lib/getSocials";
import { introAnimation } from "../animations";
import "../styles/css/globals.css";
import "../styles/scss/main.scss";
import { DefaultSeo } from "next-seo";
import SEO from "../../next-seo.config";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }) {
	const [appState, setAppState] = useState(defaultState);
	const { pathname } = useRouter();

	useEffect(() => {
		introAnimation(setIntroComplete);
		getNavigation(setAppState);
		getSocials(setAppState);
		document.querySelector("body").classList.add("bg-light");
	}, []);

	const toggleDropdown = () => {
		setAppState(prev => ({
			...prev,
			dropdownActive: !prev.dropdownActive,
		}));
	};

	const setIntroComplete = () => {
		setAppState(prev => ({
			...prev,
			isIntroComplete: !prev.isIntroComplete,
		}));
	};

	const toggleModal = () => {
		setAppState(prevState => {
			return {
				...prevState,
				modalActive: !prevState.modalActive,
			};
		});
	};

	return (
		<GlobalContext.Provider
			value={{ appState, setAppState, toggleModal, toggleDropdown }}
		>
			<DefaultSeo {...SEO} />
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</GlobalContext.Provider>
	);
}

export default MyApp;
