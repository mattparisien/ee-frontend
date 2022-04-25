import GETCTA from "../GetCta";

const SPLITTEXTBLOCK = `
... on ComponentBlocksSplitTextBlock {
  id
  TextLeft
  TextRight
  
  Flip
  ${GETCTA("SplitTextBlockCta")}
  
}
`;

export default SPLITTEXTBLOCK;
