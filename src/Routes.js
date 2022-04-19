import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import AboutPage from "./components/Pages/About/AboutPage";
import HomePage from "./components/Pages/Home/HomePage";
import ProjectPage from "./components/Pages/Projects/ProjectPage";
import SingleProjectPage from "./components/Pages/SingleProject/SingleProjectPage";
import NotFoundPage from "./components/Pages/NotFound/NotFoundPage";
import DemoPage from "./components/Pages/Demo/DemoPage";


function SiteRoutes(props) {
	const { location, pages } = props;

	const [pageHeadings, setPageHeadings] = useState(null);

	const pageSchema = {
		about: {
			path: "/about",
			component: AboutPage,
			title: "about",
			exact: false,
		},
		home: {
			path: "/",
			component: HomePage,
			title: "home",
			exact: true,
		},
		projects: {
			path: "/projects",
			component: ProjectPage,
			title: "projects",
			exact: true,
		},
		demo: {
			path: "/temp",
			component: DemoPage,
			title: "demo",
			exact: false,
		},
		notFound: {
			path: "/*",
			component: NotFoundPage,
			title: "notFound",
			exact: false,	
		},
		singleProject: {
			path: "/projects/:id",
			component: SingleProjectPage,
			title: "singleproject",
			exact: true,
		},
	};

	useEffect(() => {
		if (pages) {
			const newObj = {};

			pages.forEach(page => (newObj[page.Title.toLowerCase()] = page.Heading));

			setPageHeadings(newObj);
		}
	}, [pages]);

	return (
		<>
			<Routes location={location} key={location.pathname}>
				{Object.entries(pageSchema).map(page => (
					<Route
						exact={page[1].exact}
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
