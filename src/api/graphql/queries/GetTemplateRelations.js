import { gql } from "@apollo/client";

const TEMPLATERELATIONS = gql`
	query GetTemplateRelations {
		templates {
			data {
				id
				attributes {
					Name
					Relation
				}
			}
		}
	}
`;

export default TEMPLATERELATIONS;
