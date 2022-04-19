import { gql } from "@apollo/client";

export const QUOTEBLOCK = gql`
  fragment GetQuoteBlock on ComponentBlocksQuoteBlock {
    id
    Quote
    Author
  }
`;