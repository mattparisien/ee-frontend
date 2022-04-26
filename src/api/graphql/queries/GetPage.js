import { gql } from "@apollo/client";
import QUOTEBLOCK from "./fragments/blocks/GetQuoteBlock";
import TEXTBLOCK from "./fragments/blocks/GetTextBlock";
import TITLEBLOCK from "./fragments/blocks/GetTitleBlock";
import FULLBLEEDMEDIABLOCK from "./fragments/blocks/GetFullBleedMediaBlock";
import SPLITTEXTMEDIABLOCK from "./fragments/blocks/GetSplitTextMediaBlock";
import STATSBLOCK from "./fragments/blocks/GetStatsBlock";


const DYNAMICBLOCKS = `
	Choose {
		__typename
		${QUOTEBLOCK}
		${TEXTBLOCK}
		${SPLITTEXTMEDIABLOCK}
		${TITLEBLOCK}
		${FULLBLEEDMEDIABLOCK}
		${STATSBLOCK}
	}
`;

const PAGE = gql`
	query GetPage($id: ID!) {
		page(id: $id) {
			data {
				attributes {
					Name
					Active
					template {
						data {
							attributes {
								Name
							}
						}
					}
					${DYNAMICBLOCKS}
				}
			}
		}
	}
`;

export default PAGE;
