import { gql } from "@apollo/client";

const SOCIALACCOUNTS = gql`
	query GetSocialAccounts {
		socials {
			data {
				attributes {
					Name
					Url
				}
			}
		}
	}
`;

export default SOCIALACCOUNTS;