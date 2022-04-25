import { gql } from "@apollo/client";
import GETMEDIAITEM from "../GetMediaItem";

const FULLBLEEDMEDIABLOCK = `
... on ComponentBlocksFullBleedMediaBlock {
	${GETMEDIAITEM}
	FullBleedMediaBlockOptions: Options {
		QuoteBlockTheme: Theme
		DisableGutterTop
		DisableGutterBottom
	}
	}
`;

export default FULLBLEEDMEDIABLOCK;
