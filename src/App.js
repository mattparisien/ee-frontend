import React, { useRef, useEffect } from "react";
import useAppData from "./helpers/hooks/useAppData";
import { Helmet } from "react-helmet";
import Visitor from "./components/Containers/Temp/Visitor";
import Authenticated from "./components/Containers/Temp/Authenticated";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./components/styles/Global";
import Cookies from "universal-cookie";

function App() {
	const { state, themes, setState } = useAppData();

	useEffect(() => {
		const cookies = new Cookies();
		const user = cookies.get("user");

		if (user) {
			setState(prev => ({
				...prev,
				user: {
					isVisitor: false,
				},
			}));
		}
	}, []);

	return (
		<div className='App'>
			<Helmet>
				<html lang='en' />
				<title>The Eyes & Ears Agency</title>
				<meta
					name='description'
					content='
The Eyes & Ears Agency builds a bridge between the music industry and impactful non-profit organizations. We work to leverage the cultural power of music to amplify the work of non-profit organizations and mobilize musicians’ audiences to take action in support of social and environmental causes.

'
				/>
			</Helmet>
			<ThemeProvider theme={themes}>
				<GlobalStyles />
				{state.user.isVisitor ? <Visitor /> : <Authenticated />}
			</ThemeProvider>
		</div>
	);
}

export default App;
