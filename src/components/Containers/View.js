import React from "react";
import Page from "./Page";

function View({ location, inner }) {
	return (
		<Page location={location}>
			{inner}
		</Page>
	);
}

export default View;
