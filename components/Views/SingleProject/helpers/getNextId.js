const getNextId = (projects, currentId) => {
	const current =
		projects[
			projects.indexOf(projects.find(project => project.id === currentId))
		];

	if (!projects[projects.indexOf(current) + 1]) {
		return projects[0].id;
	}

	return projects[projects.indexOf(current) + 1].id;
};

export default getNextId;
