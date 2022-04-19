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
	}
`;

export default STATICHOME;
