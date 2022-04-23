import { gql } from "@apollo/client";

const QUOTEBLOCK = `
... on ComponentBlocksQuoteBlock {
	id
	Quote
	Author
	QuoteBlockOptions: Options {
		QuoteBlockTheme: Theme
		DisableGutterTop
		DisableGutterBottom
	}
}
`;

export default QUOTEBLOCK;
