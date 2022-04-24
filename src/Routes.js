import { useQuery } from "@apollo/client";
import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import PAGES from "./api/graphql/queries/GetPages";
import View from "./components/Containers/View";
import keysToCamelCase from "./helpers/keysToCamelCase";
import { AnimatePresence } from "framer-motion/dist/framer-motion";

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
			setViews(() =>
				data.pages.data
					.filter(page => page.attributes.Active)
					.map(view => ({
						id: view.id,
						...keysToCamelCase(view.attributes),
					}))
			);

			props.setNavItems(() =>
				data.pages.data.map(item => ({
					name: item.attributes.Name,
					path: item.attributes.Slug,
				}))
			);
		}
	}, [loading, error, data]);

	return (
		<AnimatePresence exitBeforeEnter>
			<Routes location={location} key={location.key}>
				{views &&
					views.map(view => (
						<Route
							path={view.slug}
							element={<View location={location} pageId={view.id} />}
							key={location.pathname}
						/>
					))}
			</Routes>
		</AnimatePresence>
	);
}

export default SiteRoutes;
