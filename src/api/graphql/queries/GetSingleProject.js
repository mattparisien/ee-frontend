import { gql } from "@apollo/client";

const GETCTA = alias => {
	return `
${alias}: CallToAction {
	ButtonText
	URL
	OpenNewTab
}
`;
};

const GETBLOCKOPTIONS = alias => {
	return `
	${alias}Options: Options {
		${alias}Theme: Theme
		DisableGutterTop
		DisableGutterBottom
	}
`;
};

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
						... on ComponentBlocksFullBleedMediaBlock {
							id
							${GETMEDIAITEM}
							
						}
						... on ComponentBlocksTextBlock {
							id
							Text
							TextBlockOptions: Options {
								SplitTextMediaBlockTheme: Theme
							}
						}
						... on ComponentBlocksSplitTextBlock {
							id
							TextLeft
							TextRight
							
							Flip
							${GETCTA("SplitTextBlockCta")}
						}
						... on ComponentBlocksSplitTextMediaBlock {
							id
							SplitTextMediaBlockOptions: Options {
								SplitTextMediaBlockTheme: Theme
							}
							TextLeft: Text
							SplitTextMediaBlockOptions: Options {
								SplitTextMediaBlockTheme: Theme
							}
							${GETMEDIAITEM}
							${GETCTA("SplitTextMediaBlockCta")}
							
						}
					}
				}
			}
		}
	}
`;

export default SINGLEPROJECT;
