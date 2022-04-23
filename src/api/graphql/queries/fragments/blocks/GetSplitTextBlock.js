import GETCTA from "../GetCta";

const SPLITTEXTBLOCK = `
... on ComponentBlocksSplitTextMediaBlock {
  id
  TextLeft
  TextRight
  
  Flip
  ${GETCTA("SplitTextBlockCta")}
  
}
`;

export default SPLITTEXTBLOCK;
