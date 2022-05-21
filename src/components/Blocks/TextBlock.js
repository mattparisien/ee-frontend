import React from "react";
import Markdown from "../Markdown/Markdown";

function TextBlock({ data }) {
	return <Markdown>{data.Text}</Markdown>;
}

export default TextBlock;
