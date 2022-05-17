const splitLayout = theme => ({
	display: "flex",
	position: 'relative',
	alignItems: "center",
	justifyContent: "center",
	[theme.breakpoints.down("sm")]: {
		flexDirection: "column",
		textAlign: "center",
		"> *:nth-of-type(1)": {
			marginBottom: theme.spacing(10),
		},
	},
});

const mediaSize = theme => ({
	width: "50vw",
	[theme.breakpoints.up("sm")]: {
		width: "30vw",
		maxWidth: theme.spacing(80),
	},
});

export { splitLayout, mediaSize };
