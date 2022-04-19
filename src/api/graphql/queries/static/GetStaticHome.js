import { gql } from "@apollo/client";

const STATICHOME = gql`
	query GetAbout {
		about {
			data {
				attributes {
					Body
				}
			}
		}
		steps {
			data {
				id
				attributes {
					Title
					Body
				}
			}
		}
		testimonials {
			data {
				attributes {
					Quote
					Author
				}
			}
		}
		projects {
			data {
				id
				attributes {
					Title
					Subtitle
					Date
					FeatureImage {
						data {
							attributes {
								url
								alternativeText
								caption
							}
						}
					}
				}
			}
		}
	}
`;

export default STATICHOME;
