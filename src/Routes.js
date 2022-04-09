import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import ContactPage from "./components/Pages/Contact/ContactPage";
import HomePage from "./components/Pages/Home/HomePage";
import ProjectPage from "./components/Pages/Projects/ProjectPage";
import SingleProjectPage from "./components/Pages/SingleProject/SingleProjectPage";


function SiteRoutes(props) {
	const { location, pages } = props;

	const [pageHeadings, setPageHeadings] = useState(null);

	const pageSchema = {
		about: {
			path: "/about",
			component: ContactPage,
			title: "about",
		},
		home: {
			path: "/",
			component: HomePage,
			title: "home",
		},
		projects: {
			path: "/projects",
			component: ProjectPage,
			title: "projects",
		},
		singleProject: {
			path: "/projects/:id",
			component: SingleProjectPage,
			title: "singleproject",
		},
	};

	useEffect(() => {
		if (pages) {
			const newObj = {};

			pages.forEach(page => (newObj[page.name.toLowerCase()] = page.heading));

			setPageHeadings(newObj);
		}
	}, [pages]);

	return (
		<>
			<Routes location={location} key={location.pathname}>
				{Object.entries(pageSchema).map(page => (
					<Route
						path={page[1].path}
						element={React.createElement(page[1].component, {
							key: location.pathname,
							location: location,
							pageHeading:
								pageHeadings && pageHeadings[page[1].title.toLowerCase()],
						})}
						key={location.pathname}
					/>
				))}
			</Routes>
		</>
	);
}

export default SiteRoutes;
