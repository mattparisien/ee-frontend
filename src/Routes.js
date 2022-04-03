import React from "react";
import { Route, Routes } from "react-router-dom";

import HomePage from "./components/Pages/Home/HomePage";
import ProjectPage from "./components/Pages/Projects/ProjectPage";
import SingleProjectPage from "./components/Pages/SingleProject/SingleProjectPage";
import ContactPage from "./components/Pages/Contact/ContactPage";

function SiteRoutes(props) {
	const { addToRefs, location } = props;

	return (
		<>
			<Routes location={location} key={location.pathname}>
				<Route
					path='/'
					element={
						<HomePage
							addToRefs={addToRefs}
							toggleTransitioning={props.siteControls.setTransitioning}
							transitioning={props.siteControls.transitioning}
						/>
					}
				/>
				<Route
					path='/contact'
					element={
						<ContactPage
							addToRefs={addToRefs}
							key={location.pathname}
							// toggleTransitioning={props.siteControls.setTransitioning}
							// transitioning={props.siteControls.transitioning}
						/>
					}
				/>
				<Route
					path='/projects'
					element={<ProjectPage addToRefs={addToRefs} />}
					key={location.pathname}
					toggleTransitioning={props.siteControls.setTransitioning}
					transitioning={props.siteControls.transitioning}
				/>
				<Route
					path='/projects/:id'
					element={<SingleProjectPage location={location} />}
					key={location.pathname}
					toggleTransitioning={props.siteControls.setTransitioning}
					transitioning={props.siteControls.transitioning}
				/>
				{/* <Route
					path='/projects/:id'
					element={<ProjectItem addToRefs={addToRefs} />}
					key={location.pathname}
				/> */}
				{/* <Route path='/*' element={<NotFound />} key={location.pathname} /> */}
			</Routes>
		</>
	);
}

export default SiteRoutes;
