import { gql } from "@apollo/client";

const PAGES = gql`
	query GetPages {
		pages {
			data {
				attributes {
          Name
          SeoUrl
          Active
        }
			}
		}
	}
`;

export default PAGES;
