import { gql, fragment } from "@apollo/client";
import { QUOTEBLOCK } from "./fragments/GetBlocks";
import CTA from "./fragments/GetCallToAction";

const SINGLEPROJECT = gql`
	query GetSingleProject($id: ID!) {
		project(id: $id) {
			data {
				id
				attributes {
					Title
					Subtitle
					FeatureImage {
						data {
							attributes {
								url
								alternativeText
							}
						}
					}
					Choose {
						__typename
						... on ComponentBlocksGalleryBlock {
							id

							GalleryBlockTheme: Theme
							Images {
								data {
									attributes {
										url
										alternativeText
										caption
									}
								}
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
							insta_post {
								data {
									attributes {
										PostUrl
									}
								}
							}
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
							CallToAction {
								ButtonText
								URL
								OpenNewTab
							}
						}
						... on ComponentBlocksSplitTextMediaBlock {
							id
							Inset
							TextLeft: Text
							insta_post {
								data {
									attributes {
										PostUrl
									}
								}
							}
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
							CallToAction {
								ButtonText
								URL
								OpenNewTab
							}
						}
					}
				}
			}
		}
	}
`;

export default SINGLEPROJECT;
