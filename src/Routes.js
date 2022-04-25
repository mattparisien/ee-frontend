import { useQuery } from "@apollo/client";
import { AnimatePresence } from "framer-motion/dist/framer-motion";
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
			setViews(() =>
				data.pages.data
					.filter(page => page.attributes.Active)
					.map(view => ({
						id: view.id,
						...keysToCamelCase(view.attributes),
					}))
			);
		}
	}, [loading, error, data]);

	return (
		<AnimatePresence exitBeforeEnter>
			{props.menuActive && <Menu {...props} />}
			<Routes location={location} key={location.pathname}>
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
