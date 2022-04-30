import checkIfObject from "./checkIfObject";
import handleMedia from "./handleMedia";
import sanitize from "./sanitize";

const normalizeData = async blockData => {
	const clone = Object.assign({}, { ...blockData });

	let sanitized = sanitize(clone);

	let normalizedMedia = await handleMedia(sanitized.mediaItem);

	if (normalizedMedia && normalizedMedia.media.length > 0) {
		sanitized["media"] = {
			options: sanitized.mediaItem.options,
			items: normalizedMedia.media,
			permalink: sanitized.mediaItem.permalink,
		};

		delete sanitized["mediaItem"];
	}

	if (sanitized.theme) {
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
