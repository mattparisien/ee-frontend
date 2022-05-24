
import { useQuery } from "@apollo/client";
import React, { useEffect } from "react";
import NAVIGATION from "../../api/graphql/queries/GetNavigation";
import Header from "../Header/Header";

function Navigation(props) {
	const { loading, error, data } = useQuery(NAVIGATION);

	useEffect(() => {
		if (!loading && data) {
			props.setNavItems(() =>
				data.navigation.data.attributes.pages.data
					.filter(item => item.attributes.Active)
					.map((page, i) => ({
						id: (i += 1),
						name: page.attributes.Name,
						path: `/${page.attributes.Slug}`,
					}))
			);
		}
	}, [loading, data, error]);
	return (
		<>
			<Header {...props} />
		</>
	);
}

export default Navigation;