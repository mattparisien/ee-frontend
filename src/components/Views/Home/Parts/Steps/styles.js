const containerStyles = theme => ({
	".MuiContainer-root": {
		overflow: "visible",
	},
	height: "140vw",
	marginLeft: 10,
	marginRight: 10,

	".c-steps_sheet": {
		height: "90%",
	},
	".c-steps_sheet_line": {
		"&:last-of-type": {
			display: "none",
		},
	},
	[theme.breakpoints.down("md")]: {
		height: "auto",
	},
	[theme.breakpoints.down("md")]: {
		marginLeft: 5,
		marginRight: 5,
		".c-steps_sheet": {
			height: "100%",
		},

		".c-steps_sheet_line": {
			"&:last-of-type": {
				display: "block",
			},
			"&:nth-of-type(even)": {
				display: "none",
			},
		},

		".c-steps_item": {
			justifyContent: "center",
		},
		".c-steps_item_1": {
			gridRow: "1/2 !important",
			gridColumn: "1/8 !important",
		},
		".c-steps_item_2": {
			gridRow: " 2/3",
			gridColumn: "6/14 !important",
		},
		".c-steps_item_3": {
			gridRow: " 3/4",
			gridColumn: "1/8 !important",
		},
		".c-steps_item_4": {
			gridRow: " 4/5",
			gridColumn: "6/14 !important",
		},
		".c-steps_item_5": {
			gridRow: " 5/6",
			gridColumn: "1/8 !important",
		},
	},
	[theme.breakpoints.down("sm")]: {
		height: "auto",
		marginLeft: 2,
		marginRight: 2,
		".c-steps_item": {
			marginBottom: theme.spacing(5),
		},
		".c-steps_item_1": {
			gridRow: "1/2 !important",
			gridColumn: "1/14 !important",
		},
		".c-steps_item_2": {
			gridRow: " 2/3",
			gridColumn: "1/14 !important",
		},
		".c-steps_item_3": {
			gridRow: " 3/4",
			gridColumn: "1/14 !important",
		},
		".c-steps_item_4": {
			gridRow: " 4/5",
			gridColumn: "1/14 !important",
		},
		".c-steps_item_5": {
			gridRow: " 5/6",
			gridColumn: "1/14 !important",
		},
	},

	".c-steps_item_1": {
		gridRow: "1/2",
		gridColumn: "1/7",
	},
	".c-steps_item_2": {
		gridColumn: "5/11",
	},
	".c-steps_item_3": {
		gridRow: " 3/4",
		gridColumn: "8/14",
	},
	".c-steps_item_4": {
		gridRow: " 4/5",
		gridColumn: "5/11",
	},
	".c-steps_item_5": {
		gridRow: " 5/6",
		gridColumn: "1/7",
	},
});

const notesWrapper = theme => ({
	position: "absolute",
	".inner": {
		width: "100%",
		height: "100%",
		position: "relative",
	},
	top: 0,
	left: 0,
	width: "100%",
	height: "100%",

	".c-note": {
		position: "absolute",
		mixBlendMode: "multiply",
		"&_1": {
			width: "4vw",
			top: "37vw",
			left: "59vw",
			fill: theme.palette.primary.colorSet.blue,
		},
		"&_2": {
			width: "10vw",
			top: "7vw",
			right: "50vw",
			fill: theme.palette.primary.colorSet.red,
		},
		"&_3": {
			width: "5vw",
			bottom: "40vw",
			right: "36vw",
			fill: theme.palette.primary.colorSet.red,
		},
		"&_4": {
			width: "10vw",
			bottom: "71vw",
			right: "12vw",
			fill: theme.palette.primary.colorSet.yellow,
		},
		"&_5": {
			width: "5vw",
			bottom: "12vw",
			right: "53vw",
			fill: theme.palette.primary.colorSet.green,
		},
	},
});

export { containerStyles, notesWrapper };
