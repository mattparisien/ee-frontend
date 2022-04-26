import { useQuery } from "@apollo/client";
import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import PAGES from "./api/graphql/queries/GetPages";
import View from "./components/Containers/View";
import keysToCamelCase from "./helpers/keysToCamelCase";
import Menu from "./components/Menu/Menu";

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

			setViews(views);
		}
	}, [loading, error, data]);

	return (
		<Routes location={location} key={location.pathname}>
			{views &&
				views.map(view => (
					<Route
						path={view.slug}
						element={<View {...props} location={location} pageId={view.id} />}
						key={location.pathname}
					/>
				))}
		</Routes>
	);
}

export default SiteRoutes;
