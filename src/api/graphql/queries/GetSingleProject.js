import { gql } from "@apollo/client";
import FULLBLEEDMEDIABLOCK from "./fragments/blocks/GetFullBleedMediaBlock";
import TEXTBLOCK from "./fragments/blocks/GetTextBlock";
import QUOTEBLOCK from "./fragments/blocks/GetQuoteBlock";
import SPLITTEXTBLOCK from "./fragments/blocks/GetSplitTextBlock";
import STATSBLOCK from "./fragments/blocks/GetStatsBlock";
import SPLITTEXTMEDIABLOCK from "./fragments/blocks/GetSplitTextMediaBlock";

const GETIMAGEDATA = `
data {
	attributes {
		url
		alternativeText
		caption
	}
}

`;

const SINGLEPROJECT = gql`
	query GetSingleProject($id: ID) {
		project(id: $id) {
			data {
				id
				attributes {
					Title
					Subtitle
					FeatureImage {
						${GETIMAGEDATA}
					}
					Choose {
						__typename
						... on ComponentBlocksGalleryBlock {
							id
							GalleryBlockTheme: Theme
							Images {
								${GETIMAGEDATA}
							}
						}
						${QUOTEBLOCK}
						
						${FULLBLEEDMEDIABLOCK}
						${TEXTBLOCK}
						${SPLITTEXTBLOCK}
						${STATSBLOCK}
						${SPLITTEXTMEDIABLOCK}
						
						
						
					}
				}
			}
		}
	}
`;
export default SINGLEPROJECT;
