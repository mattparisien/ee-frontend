const getNextProject = (querySlug, projects) => {
	const title = querySlug.split("-").join(" ");

	if (projects && projects.length) {
		const currentProject = projects.find(
			project => project.Subtitle.toLowerCase() === title.toLowerCase()
		);

		const currIndex = projects.indexOf(currentProject);

		if (currIndex + 1 !== projects.length) {
			return projects[currIndex + 1];
		} else {
			return projects[0];
		}
	}

	return null;
};

export default getNextProject;
