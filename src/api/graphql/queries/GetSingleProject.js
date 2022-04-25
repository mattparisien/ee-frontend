import { gql } from "@apollo/client";
import FULLBLEEDMEDIABLOCK from "./fragments/blocks/GetFullBleedMediaBlock";
import TEXTBLOCK from "./fragments/blocks/GetTextBlock";
import QUOTEBLOCK from "./fragments/blocks/GetQuoteBlock";
import SPLITTEXTBLOCK from "./fragments/blocks/GetSplitTextBlock";
import SPLITTEXTMEDIABLOCK from "./fragments/blocks/GetSplitTextMediaBlock";

const GETCTA = alias => {
	return `
${alias}: CallToAction {
	ButtonText
	URL
	OpenNewTab
}
`;
};

const GETIMAGEDATA = `
data {
	attributes {
		url
		alternativeText
		caption
	}
}

`;

const GETMEDIAITEM = `
MediaItem {
	id
	Permalink
	Upload {
		data {
			attributes {
				url
				alternativeText
				caption
				provider_metadata
			}
		}
	}
	InstaUrl
	Options {
		Inset
		Linkable
		Format
		DisplayCaption
	}
}
`;

const SINGLEPROJECT = gql`
	query GetSingleProject($id: ID!) {
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
						${SPLITTEXTMEDIABLOCK}
					}
				}
			}
		}
	}
`;

export default SINGLEPROJECT;
