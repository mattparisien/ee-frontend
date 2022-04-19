import { gql } from "@apollo/client";

const PROJECTS = gql`
	query GetProjects {
		projects {
			data {
				id
				attributes {
					Title
					Date
					Subtitle
					FeatureImage {
						data {
							attributes {
								url
								alternativeText
							}
						}
					}
				}
			}
		}
	}
`;

export default PROJECTS;
