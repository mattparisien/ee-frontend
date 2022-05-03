import React from "react";
import Markdown from "../Markdown/Markdown";

function SingleInstaBlock({ data }) {
	return <Markdown>{data && data.code}</Markdown>;
}

export default SingleInstaBlock;
