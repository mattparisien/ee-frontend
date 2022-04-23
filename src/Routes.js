import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import AboutPage from "./components/Pages/About/AboutPage";
import HomePage from "./components/Pages/Home/HomePage";
import ProjectPage from "./components/Pages/Projects/ProjectPage";
import SingleProjectPage from "./components/Pages/SingleProject/SingleProjectPage";
import NotFoundPage from "./components/Pages/NotFound/NotFoundPage";
import DemoPage from "./components/Pages/Demo/DemoPage";
import { useQuery } from "@apollo/client";
import PAGES from "./api/graphql/queries/GetPages";
import keysToCamelCase from "./helpers/keysToCamelCase";
import View from "./components/Containers/View";

function SiteRoutes(props) {
	const { location, pages } = props;

	const [views, setViews] = useState(null);

	const { loading, error, data } = useQuery(PAGES);

	useEffect(() => {
		if (!loading && data) {
			setViews(() =>
				data.pages.data.map(view => ({
					...keysToCamelCase(view.attributes),
				}))
			);
		}
	}, [loading, error, data]);

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

	return (
		<>
			<Routes location={location} key={location.pathname}>
				{views &&
					views.map(view => (
						<Route
							path={view.name !== "Home" ? view.slug : "/"}
							element={<View location={location} pageId={}/>}
							key={location.pathname}
						/>
					))}
				{/* {Object.entries(pageSchema).map(page => (
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
				))} */}
			</Routes>
		</>
	);
}

export default SiteRoutes;
