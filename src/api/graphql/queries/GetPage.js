import { gql } from "@apollo/client";
import QUOTEBLOCK from "./fragments/blocks/GetQuoteBlock";
import TEXTBLOCK from "./fragments/blocks/GetTextBlock";

const DYNAMICBLOCKS = `
	Choose {
		__typename
		${QUOTEBLOCK}
		${TEXTBLOCK}
	}
`;

const PAGE = gql`
	query GetPage($id: ID!) {
		page(id: $id) {
			data {
				attributes {
					Name
					Active
					${DYNAMICBLOCKS}
				}
			}
		}
	}
`;

export default PAGE;
