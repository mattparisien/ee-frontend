import React from "react";
import { Route, Routes } from "react-router-dom";
import { Contact, Home, Projects } from "./components/Pages/index";
import ProjectPage from "./components/Pages/Projects/ProjectPage";
import NotFound from "./components/404/NotFound";
import SingleProject from "./components/Pages/SingleProject/SingleProject";

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
					element={<ProjectPage addToRefs={addToRefs} />}
					key={location.pathname}
				/>
				<Route
					path='/projects/:id'
					element={<SingleProject location={location}/>}
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
