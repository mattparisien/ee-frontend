import React from "react";
import Markdown from "../Markdown/Markdown";

function TextBlock({ data }) {
	return <Markdown>{data.text}</Markdown>;
}

export default TextBlock;
