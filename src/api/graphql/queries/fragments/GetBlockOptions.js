const GETBLOCKOPTIONS = alias => {
	return `
	${alias}Options: Options {
		${alias}Theme: Theme
		DisableGutterTop
		DisableGutterBottom
	}
`;
};

export default GETBLOCKOPTIONS;