import React from "react";
import Markdown from "../Markdown/Markdown";

function TextBlock({ data }) {
	return (
		<Markdown
			paragraphClasses='mt-5 md:mt-8 text-neutral-300'
			headingClasses='font-adieu'
		>
			{data.Text}
		</Markdown>
	);
}

export default TextBlock;
