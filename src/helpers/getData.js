import { CatchingPokemonSharp } from "@mui/icons-material";
import axios from "axios";

const getData = endpoints => {
	const finalEndpoints = prependBaseURL(endpoints);

	return Promise.all(finalEndpoints.map(endpoint => axios.get(endpoint))).then(
		all => {
			const normalized = normalize(all);
			const assigned = assign(normalized, endpoints);
			return assigned;
		}
	);
};

const prependBaseURL = array => {
	return array.map(item => process.env.REACT_APP_API_URL + item);
};

const normalize = array => {
	const newArray = array.map(data => data.data.data);
	return unwrap(newArray);
};

const unwrap = array => {
	const newArray = [];

	array.forEach(item => {
		if (Array.isArray(item)) {
			newArray.push(
				item.map(object => ({ id: object.id, ...object.attributes }))
			);
		} else {
			newArray.push({ id: item.id, ...item.attributes });
		}
	});

	return newArray;
};

const assign = (sourceArray, referenceArray) => {
	const finalObject = {};

	for (let i = 0; i < sourceArray.length; i++) {
		const sectionName = getPathName(referenceArray[i]);

		finalObject[sectionName] = sourceArray[i];
	}

	return finalObject;
};

const getPathName = string => {
	let pathName = [];
	const format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;

	string = string.split("");

	for (let i = 0; i < string.length; i++) {
		if (i > 0) {
			if (!format.test(string[i])) {
				pathName.push(string[i]);
			} else {
				return pathName.join("");
			}
		}
	}

	return pathName.join("");
};

export default getData;
