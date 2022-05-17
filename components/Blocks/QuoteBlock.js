import React from "react";
import Quote from "../Quote/Quote";

function QuoteBlock({ data, paragraphSize }) {
	return (
		<Quote
			quote={data.quote}
			author={data.author}
			paragraphSize={paragraphSize}
		/>
	);
}

export default QuoteBlock;
