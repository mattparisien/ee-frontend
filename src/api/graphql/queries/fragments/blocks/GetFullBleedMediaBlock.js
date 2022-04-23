import { gql } from "@apollo/client";
import GETMEDIAITEM from "../GetMediaItem";

const FULLBLEEDMEDIABLOCK = `
... on ComponentBlocksFullBleedMediaBlock {
	${GETMEDIAITEM}
	}
`;

export default FULLBLEEDMEDIABLOCK;
