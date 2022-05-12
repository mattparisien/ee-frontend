const containerStyles = theme => ({
	".MuiContainer-root": {
		overflow: "visible",
	},
	height: "100vw",
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
		gridColumn: "1/4",
	},
	".c-steps_item_2": {
		gridColumn: "4/8",
	},
	".c-steps_item_3": {
		gridRow: " 3/4",
		gridColumn: "8/11",
	},
	".c-steps_item_4": {
		gridRow: " 4/5",
		gridColumn: "4/8",
	},
	".c-steps_item_5": {
		gridRow: " 5/6",
		gridColumn: "1/4",
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
		fill: theme.palette.primary.yellow,
		"&_1": {
			width: "3vw",
			top: "31vw",
			left: "60vw",
		},
		"&_2": {
			width: "5vw",
			top: "11.5vw",
			left: "30vw"
		},
		"&_3": {
			width: "3vw",
			bottom: "48vw",
			right: "10vw",
		},
		"&_4": {
			width: "5vw",
			bottom: "30vw",
			right: "36vw",
		},
		"&_5": {
			width: "3vw",
			bottom: "7vw",
			left: "30vw"
		},
		[theme.breakpoints.down("md")]: {
			left: "50%",
			transform: `translateX(-50%)`,
			"&_1": {
				width: "5vw",
				top: "43vw",
				left: "69vw",
			},
			"&_2": {
				width: "8vw",
				top: "20vw",
				left: "16vw"
			},
			"&_3": {
				width: "5vw",
				bottom: "60vw",
				left: "15vw"
				
			},
			"&_4": {
				width: "8vw",
				bottom: "35vw",
				left: '73vw'
			},
			"&_5": {
				width: "5vw",
				bottom: "3vw",
				left: "12vw"
			},
		}
	},
});

export { containerStyles, notesWrapper };
