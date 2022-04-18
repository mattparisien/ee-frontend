import { gql } from "@apollo/client";

const NEXTPROJECT = gql`
	query GetNextProject($id: ID!) {
		project(id: $id) {
			data {
				id
				attributes {
					Title
					Subtitle
				}
			}
		}
	}
`;

export default NEXTPROJECT;
