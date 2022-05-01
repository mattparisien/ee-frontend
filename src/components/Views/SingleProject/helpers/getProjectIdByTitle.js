const getProjectIdByTitle = (title, array) => {
	const obj = array.find(
		project =>
			project.subtitle.toLowerCase() === title ||
			project.title.toLowerCase() === title
	);
	if (obj) {
		return obj.id;
	}
	return null;
};

export default getProjectIdByTitle;
