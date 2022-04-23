import { gql } from "@apollo/client";
import QUOTEBLOCK from "./fragments/blocks/GetQuoteBlock";
import TEXTBLOCK from "./fragments/blocks/GetTextBlock";
import SPLITTEXTMEDIABLOCK from "./fragments/blocks/GetSplitTextMediaBlock";
import SPLITTEXTBLOCK from "./fragments/blocks/GetSplitTextBlock";
import TITLEBLOCK from "./fragments/blocks/GetTitleBlock";

const DYNAMICBLOCKS = `
	Choose {
		__typename
		${QUOTEBLOCK}
		${TEXTBLOCK}
		${SPLITTEXTMEDIABLOCK}
		${TITLEBLOCK}
		
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
