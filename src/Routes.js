import React from "react";
import { Route, Routes } from "react-router-dom";
import NotFound from "./components/404/NotFound";
import { ProjectPage, HomePage } from "./components/Pages/index";

function SiteRoutes(props) {
	const { location, addToRefs } = props;

	return (
		<>
			<Routes location={location} key={location.pathname}>
				<Route path='/' element={<HomePage addToRefs={addToRefs} />} />
				
				<Route
					path='/projects'
					element={<ProjectPage addToRefs={addToRefs} />}
					key={location.pathname}
				/>
				{/* <Route
					path='/projects/:id'
					element={<ProjectItem addToRefs={addToRefs} />}
					key={location.pathname}
				/> */}
				<Route path='/*' element={<NotFound />} key={location.pathname} />
			</Routes>
		</>
	);
}

export default SiteRoutes;
