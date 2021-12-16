import React from "react";
import { Scroll } from "react-locomotive-scroll";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, Contact, Projects, ProjectItem } from "./components/Pages/index";
import ScrollToTop from "./helpers/ScrollToTop";

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
