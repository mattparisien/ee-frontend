import React from "react";
import Quote from "../Quote/Quote";

function QuoteBlock({ data, fontSize }) {
	return <Quote quote={data.quote} author={data.author} />;
}

export default QuoteBlock;
