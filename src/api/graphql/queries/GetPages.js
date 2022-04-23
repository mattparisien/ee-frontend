import { gql } from "@apollo/client";

const PAGES = gql`
	query GetPages {
		pages {
			data {
				id
				attributes {
					Name
					Slug
					Active
				}
			}
		}
	}
`;

export default PAGES;
