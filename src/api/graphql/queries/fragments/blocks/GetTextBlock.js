import { gql } from "@apollo/client";
import GETCTA from "../GetCta";
import GETBLOCKOPTIONS from "../GetBlockOptions";

const TEXTBLOCK = `
... on ComponentBlocksTextBlock {
	
	Text
	${GETCTA("TextBlockCta")}
	${GETBLOCKOPTIONS("TextBlock")}
}
`;

export default TEXTBLOCK;
