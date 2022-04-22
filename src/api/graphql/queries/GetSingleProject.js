import { gql } from "@apollo/client";


const GETCTA = `
CallToAction {
	ButtonText
	URL
	OpenNewTab
}
`;

const GETINSTAPOST = `
insta_post {
	data {
		attributes {
			PostUrl
		}
	}
}

`;

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
						... on ComponentBlocksQuoteBlock {
							id
							Quote
							Author
							QuoteBlockTheme: Theme
						}
						... on ComponentBlocksFullBleedMediaBlock {
							id
							${GETMEDIAITEM}
							
						}
						... on ComponentBlocksTextBlock {
							id
							Text
							Theme
						}
						... on ComponentBlocksSplitTextBlock {
							id
							TextLeft
							TextRight
							Flip
							${GETCTA}
						}
						... on ComponentBlocksSplitTextMediaBlock {
							id
							SplitTextMediaBlockTheme: Theme
							TextLeft: Text
							${GETMEDIAITEM}
							${GETCTA}
							
						}
					}
				}
			}
		}
	}
`;

export default SINGLEPROJECT;
