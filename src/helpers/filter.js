

function filter(obj) {
	let arr = [];

	if (!obj["children"]) {
		return;
	}

	for (key in obj["children"]) {
		if (!Array.isArray(obj["children"][key]) && obj["children"][key] !== null) {
			filter(obj["children"][key]);
		} else {
		}
	}
}
