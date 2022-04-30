function checkMediaType(data) {
	if (!Array.isArray(data)) {
		return checkType(data.url);
	}

	if (data.length > 1) {
		return "carousel";
	} else {
		return checkType(data[0]);
	}
}

function checkType(url) {
	if (url.match(/\.(jpeg|jpg|gif|png)$/) != null) {
		return "image";
	} else if (url.match(/\.(mov|mp4|wmv)$/) != null) {
		return "video";
	}
}

export default checkMediaType;
