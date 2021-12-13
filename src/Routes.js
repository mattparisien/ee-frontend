import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, Contact, Projects, ProjectItem } from "./components/Pages/index";

function SiteRoutes(props) {
	const { location, addToRefs } = props;

	return (
		<>
			<Routes location={location} key={location.pathname}>
				<Route path='/' element={<Home addToRefs={addToRefs} />} />
				<Route path='/contact' element={<Contact />} />
				<Route
					path='/projects'
					element={<Projects />}
					key={location.pathname}
				/>
				<Route path='/projects/:id' element={<ProjectItem />} />
			</Routes>
		</>
	);
}

export default SiteRoutes;
