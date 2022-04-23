import { gql } from "@apollo/client";


const NAVIGATION = gql`
	query GetNavigation {
		navigation {
      data {
        attributes {
          pages {
           data {
             attributes {
               Name
               Slug
             }
           } 
          }
        }
      }
    }
	}
`;

export default NAVIGATION;
