import { ConstructionOutlined } from "@mui/icons-material";
import handleMedia from "./handleMedia";
import sanitize from "./sanitize";
import simplifyKeys from "./simplifyKeys";
import checkIfObject from "./checkIfObject";

const normalizeData = async blockData => {
	const clone = Object.assign({}, { ...blockData });

	let sanitized = sanitize(clone);

	let normalizedMedia = await handleMedia(sanitized.mediaItem);

	if (normalizedMedia && normalizedMedia.media.length > 0) {
		delete sanitized["mediaItem"];
		sanitized["media"] = normalizedMedia.media;
	}

	// let simplifiedKeys = await simplifyKeys(sanitized);

	// if ("mediaItem" in simplifiedKeys && !simplifiedKeys["mediaItem"].data) {
	// 	//Set data to null if media item is null  - we dont want to display the block at all if the info hasn't been obtained

	// 	simplifiedKeys = null;
	// }

	if (sanitized.theme) {
		console.log("has a theme", sanitized);

		if (checkIfObject(sanitized.options)) {
			sanitized.options["theme"] = sanitized.theme;
		} else {
			sanitized.options = {
				theme: sanitized.theme,
			};
		}
	}
	return sanitized;
};

export default normalizeData;
