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
						... on ComponentBlocksGalleryBlock {
							id
							BackgroundColor
							Images {
								data {
									attributes {
										width
									}
								}
							}
						}
					}
				}
			}
		}
	}
`;

export default SINGLEPROJECT;
