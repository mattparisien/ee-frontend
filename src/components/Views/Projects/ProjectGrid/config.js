const gutter = "5vw";

const gridContainer = {
	position: "relative",
	".o-colorBlobs": {
		pointerEvents: "none",
		mixBlendMode: "multiply",
		"& *": {
			pointerEvents: "none",
		},
		svg: {
			transform: "scale(1.2)",
		},
	},
};

const gridSchema = [
	{
		row: {
			height: "22vw",
			align: null,
			gutter: null,
		},
		item: {
			height: "100%",
			width: "38%",
		},
	},
	{
		row: {
			height: "28vw",
			align: "flex-end",
			gutter: gutter,
		},
		item: {
			height: "100%",
			width: "27%",
			margin: "0 0 0 auto",
		},
	},
	{
		row: {
			height: "22vw",
			align: null,
			gutter: gutter,
		},
		item: {
			height: "100%",
			width: "38%",
			margin: null,
		},
	},
	{
		row: {
			height: "50vw",
			align: null,
			gutter: null,
		},
		item: {
			height: "100%",
			width: "47%",
			margin: "0 0 0 auto",
		},
	},
	{
		row: {
			height: "28vw",
			align: "flex-start",
			gutter: gutter,
		},
		item: {
			height: "100%",
			width: "27%",
		},
	},
	{
		row: {
			height: "22vw",
			align: "flex-start",
			gutter: gutter,
		},
		item: {
			height: "100%",
			width: "38%",

			margin: "0 0 0 auto",
		},
	},
];

export { gridContainer, gridSchema };
