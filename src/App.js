import { ThemeProvider } from "@mui/material";
import React, { useEffect, useRef } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Cookies from "universal-cookie";
import { Header } from "./components";
import ResetHome from "./components/ResetHome";
import useAppData from "./helpers/hooks/useAppData";
import { GlobalStyles } from "@mui/material";

function App() {
	const { appRefs, state, setState, pending, theme, location, globalStyle } = useAppData();
	const scrollWrapper = useRef(null);


	

	useEffect(() => {
		console.log("Built by Matthew Parisien 🛠");

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
	}, [setState]);

	return (
		<HelmetProvider>
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
				<GlobalStyles styles={globalStyle}/>
				<ThemeProvider theme={theme}>
					{/* <GlobalStyles
						isScrollLocked={state.isScrollLocked}
						location={location}
					/>
					<LocomotiveScrollProvider
						options={{
							initPosition: {
								x: 0,
								y: 0,
							},

							smooth: true,
							getDirection: true,
						}}
						onLocationChange={scroll =>
							scroll.scrollTo(0, { duration: 0, disableLerp: true })
						}
						containerRef={scrollWrapper}
					> */}
					<div
						className='scroll-wrapper'
						ref={scrollWrapper}
						data-scroll-container
					>
						<Header/>
						<ResetHome />
						{/* {state.user.isVisitor ? <Visitor /> : <Authenticated />} */}
					</div>
					{/* </LocomotiveScrollProvider> */}
				</ThemeProvider>
			</div>
		</HelmetProvider>
	);
}

export default App;
