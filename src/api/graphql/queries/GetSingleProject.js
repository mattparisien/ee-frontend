import { gql, fragment } from "@apollo/client";
import { QUOTEBLOCK } from "./fragments/GetBlocks";

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
							BackgroundColor
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
						}
					}
				}
			}
		}
	}
`;

export default SINGLEPROJECT;
