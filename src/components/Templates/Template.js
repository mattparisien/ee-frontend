import React from "react";
import { TEMPLATES } from "./index";

function Template({ name }) {
	return name ? React.createElement(TEMPLATES[name]) : null;
}

export default Template;
