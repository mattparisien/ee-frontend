import handleMedia from "./handleMedia";
import sanitize from "./sanitize";
import simplifyKeys from "./simplifyKeys";

const normalizeData = async blockData => {
	const clone = Object.assign({}, { ...blockData });

	const sanitized = sanitize(clone);
	let normalized = await handleMedia(sanitized);

	let simplifiedKeys = await simplifyKeys(normalized);

	if ("mediaItem" in simplifiedKeys && !simplifiedKeys["mediaItem"].data) {
		//Set data to null if media item is null  - we dont want to display the block at all if the info hasn't been obtained

		simplifiedKeys = null;
	}

	return simplifiedKeys;
};

export default normalizeData;
