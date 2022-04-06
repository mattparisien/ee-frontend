import React from "react";
import ReactMarkdown from "react-markdown";

function Markdown({ children }) {
	return (
		<ReactMarkdown
			disallowedElements={["p"]}
			unwrapDisallowed={true}
			children={children}
		/>
	);
}

export default Markdown;
