import React from "react";
import Quote from "../Quote/Quote";

function QuoteBlock({ data, paragraphSize }) {
	return (
		<Quote
			quote={data.Quote}
			author={data.Author}
			paragraphSize={paragraphSize}
		/>
	);
}

export default QuoteBlock;
