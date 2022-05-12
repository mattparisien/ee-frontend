const getMediaType = url => {
	return checkType(url);
};

function checkType(url) {
	if (url.match(/\.(jpeg|jpg|gif|png)$/) != null) {
		return "image";
	} else if (url.match(/\.(mov|mp4|wmv)$/) != null) {
		return "video";
	}
}

export default getMediaType;
