import { gql } from "@apollo/client";

const BIO = gql`
	query GetBio {
		bio {
			data {
				attributes {
          Body
          SelfImage {
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

export default BIO;
