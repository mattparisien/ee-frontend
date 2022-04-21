import { gql } from "@apollo/client";

const CTA = `
fragment CallToAction on Choose {
  ButtonText
  URL
  OpenNewTab
}
`;

export default CTA;
