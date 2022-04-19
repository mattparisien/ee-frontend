export const containerStyles = theme => ({
	display: "flex",
	justifyContent: "space-between",
	[theme.breakpoints.down("sm")]: {
		flexDirection: "column",
		alignItems: "center",
	},
});

export const boxStyles = theme => ({
	display: "flex",
	flexDirection: "column",
	alignItems: "flex-start",
	[theme.breakpoints.down("sm")]: {
		alignItems: "center",
	},
});

export const drawnLogo = theme => ({
	width: "10rem",
	[theme.breakpoints.down("sm")]: {
		marginTop: "4rem",
	},
});

export const spacer = {
	height: "7rem",
};

export const bottom = theme => ({
	width: "100%",
	height: "7rem",
	display: "flex",
	justifyContent: "space-between",
	alignItems: "center",
});

export const footer = theme => ({
	height: "500px",
	[theme.breakpoints.up("md")]: {
		height: "600px",
	},
});

export const wrap = {
	height: "100%",
	display: "flex",
	flexDirection: "column",
	justifyContent: "space-between",
};
