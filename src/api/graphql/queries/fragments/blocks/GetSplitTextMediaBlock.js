import GETCTA from "../GetCta";
import GETMEDIAITEM from "../GetMediaItem";

const SPLITTEXTMEDIABLOCK = `
... on ComponentBlocksSplitTextMediaBlock {
  id
  SplitTextMediaBlockOptions: Options {
    SplitTextMediaBlockTheme: Theme
  }
  TextLeft: Text
  SplitTextMediaBlockOptions: Options {
    SplitTextMediaBlockTheme: Theme
  }
  ${GETMEDIAITEM}
  ${GETCTA("SplitTextMediaBlockCta")}
  
}
`;

export default SPLITTEXTMEDIABLOCK;
