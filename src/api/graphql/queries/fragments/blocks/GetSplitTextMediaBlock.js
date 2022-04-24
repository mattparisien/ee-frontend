import GETCTA from "../GetCta";
import GETMEDIAITEM from "../GetMediaItem";
import GETBLOCKOPTIONS from "../GetBlockOptions";

const SPLITTEXTMEDIABLOCK = `
... on ComponentBlocksSplitTextMediaBlock {
  id
  TextLeft: Text
  Options {
    DisableGutterTop
    DisableGutterBottom
  }
  ${GETMEDIAITEM}
  ${GETCTA("SplitTextMediaBlockCta")}
  
}
`;

export default SPLITTEXTMEDIABLOCK;
