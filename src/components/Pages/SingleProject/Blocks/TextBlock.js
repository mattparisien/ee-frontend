import React from "react";
import Markdown from "../../../Markdown/Markdown";

function TextBlock({ data }) {
	return <Markdown>{data.data.text}</Markdown>;
}

export default TextBlock;
