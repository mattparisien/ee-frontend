import { AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import View from "./components/Containers/View";

function SiteRoutes(props) {
	const { location } = props;

	const [views, setViews] = useState([
		{
			id: 1,
			name: "Home",
			slug: "/",
		},
		{
			id: 9,
			name: "Home",
			slug: "/home",
		},
		{
			id: 11,
			name: "Projects",
			slug: "projects",
		},
		{
			id: 13,
			name: "SingleProject",
			slug: "/projects/:name",
		},
		{
			id: 12,
			name: "About",
			slug: "/about",
		},
		{
			id: 14,
			name: "NotFound",
			slug: "/not-found",
		},
	]);

	// const [{ data, error, loading }] = useAxios(
	// 	process.env.REACT_APP_API_URL + "/pages"
	// );

	// useEffect(() => {
	// 	if (!loading && data) {
	// 		const views = data.data
	// 			.filter(page => page.attributes.Active)
	// 			.flatMap(current =>
	// 				current.attributes.Name === "Home"
	// 					? [
	// 							current,
	// 							{
	// 								id: current.id,
	// 								attributes: {
	// 									name: "Home",
	// 									slug: "/",
	// 								},
	// 							},
	// 					  ]
	// 					: current
	// 			)
	// 			.map(view => ({
	// 				id: view.id,
	// 				...keysToCamelCase(view.attributes),
	// 			}));

	// 		setViews(views);
	// 	}
	// }, [loading, error, data]);

	return (
		<AnimatePresence exitBeforeEnter>
			<Routes location={location} key={location.pathname}>
				{views &&
					views.map(view => (
						<Route
							exact
							path={view.slug}
							element={
								<View
									{...props}
									location={location}
									pageId={view.id}
									name={view.name}
								/>
							}
							key={location.pathname}
						/>
					))}
			</Routes>
		</AnimatePresence>
	);
}

export default SiteRoutes;
