import { gql } from "@apollo/client";

const GETUPLOADEDMEDIA = `
UploadedMedia {
	data {
		attributes {
			url
			alternativeText
			caption
			provider_metadata
		}
	}
}
`;

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
							${GETUPLOADEDMEDIA}
							${GETINSTAPOST}
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
							Inset
							Flip
							SplitTextMediaBlockTheme: Theme
							TextLeft: Text
							${GETINSTAPOST}
							${GETUPLOADEDMEDIA}
							${GETCTA}
						}
					}
				}
			}
		}
	}
`;

export default SINGLEPROJECT;
