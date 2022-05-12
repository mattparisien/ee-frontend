import { gql } from "@apollo/client";

const FOOTER = gql`
	query GetFooter {
		footer {
			data {
				attributes {
          Email
          Heading
        }
			}
		}
	}
`;

export default FOOTER;