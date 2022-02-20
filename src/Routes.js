import React from "react";
import { Route, Routes } from "react-router-dom";
import { Contact, Home, ProjectItem, Projects } from "./components/Pages/index";

function SiteRoutes(props) {
	const { location, addToRefs } = props;

	return (
		<>
			
				<Routes location={location} key={location.pathname}>
					<Route path='/' element={<Home addToRefs={addToRefs} />} />
					<Route
						path='/contact'
						element={<Contact addToRefs={addToRefs} key={location.pathname} />}
					/>
					<Route
						path='/projects'
						element={<Projects addToRefs={addToRefs} />}
						key={location.pathname}
					/>
					<Route
						path='/projects/:id'
						element={<ProjectItem addToRefs={addToRefs} />}
						key={location.pathname}
					/>
				</Routes>
			
		</>
	);
}

export default SiteRoutes;
