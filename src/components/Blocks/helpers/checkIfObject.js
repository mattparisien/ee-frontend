const checkIfObject = o => {
	if (o && Object.getPrototypeOf(o).isPrototypeOf(Object)) {
		return true;
	}

	return false;
};

export default checkIfObject;
