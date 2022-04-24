import React from "react";
import { TEMPLATES } from "./index";

function Template({ name, location }) {
	return name
		? React.createElement(TEMPLATES[name], { location: location })
		: null;
}

export default Template;
