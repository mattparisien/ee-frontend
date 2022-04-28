import { useQuery } from "@apollo/client";
import { AnimatePresence } from "framer-motion/dist/framer-motion";
import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import PAGES from "./api/graphql/queries/GetPages";
import View from "./components/Containers/View";
import keysToCamelCase from "./helpers/keysToCamelCase";

function SiteRoutes(props) {
	const { location } = props;

	const [views, setViews] = useState(null);

	const { loading, error, data } = useQuery(PAGES, {
		variables: {
			active: true,
		},
	});

	useEffect(() => {
		if (!loading && data) {
			const views = data.pages.data
				.filter(page => page.attributes.Active)
				.flatMap(current =>
					current.attributes.Name === "Home"
						? [
								current,
								{
									id: current.id,
									attributes: {
										name: "Home",
										slug: "/",
									},
								},
						  ]
						: current
				)
				.map(view => ({
					id: view.id,
					...keysToCamelCase(view.attributes),
				}));
			console.log(views);
			setViews(views);
		}
	}, [loading, error, data]);

	return (
		<AnimatePresence exitBeforeEnter>
			<Routes location={location} key={location.pathname}>
				{views &&
					views.map(view => (
						<Route
							exact
							path={view.slug}
							element={<View {...props} location={location} pageId={view.id} />}
							key={location.pathname}
						/>
					))}
			</Routes>
		</AnimatePresence>
	);
}

export default SiteRoutes;
