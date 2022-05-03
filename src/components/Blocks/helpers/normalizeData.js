import camelcaseKeys from "camelcase-keys";
import checkIfObject from "./checkIfObject";
import handleMedia from "./handleMedia";

const normalizeData = async blockData => {
	const clone = Object.assign({}, { ...blockData });
	const options = { deep: true };
	let newObj = camelcaseKeys(clone, options);

	await handleMedia(newObj.mediaItem).then(data => {
		if (data && data.media.length > 0) {
			newObj["media"] = {
				items: data.media,
				options: newObj.mediaItem.options || data.options,
				permalink: newObj.mediaItem.permalink,
			};
		} else {
			newObj["media"] = newObj.media || null;
		}

		delete newObj.mediaItem;
	});

	if (newObj.theme) {
		if (checkIfObject(newObj.options)) {
			newObj.options["theme"] = newObj.theme;
		} else {
			newObj.options = {
				theme: newObj.theme,
			};
		}
	}
	return newObj;
};

export default normalizeData;
