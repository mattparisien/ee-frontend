import { IconButton } from "@mui/material";

function Burger({ menuActive, onBurgerClick }) {
	
	const burgerBtn = theme => ({
		display: "none",
		paddingRight: 0,
		backgroundColor: theme.palette.primary[menuActive ? "light" : "dark"],
		width: "5rem",
		borderRadius: "2rem",
		height: "100%",
		position: "relative",
		transition:
			"color .3s cubic-bezier(.35,.755,.42,.95),background-color .3s cubic-bezier(.35,.755,.42,.95)",
		svg: {
			fill: theme.palette.primary[menuActive ? "light" : "dark"],
			transition: "fill 200ms ease",
		},
		[theme.breakpoints.down("md")]: {
			display: "block",
		},
		"&::before": {
			position: "absolute",
			width: "30px",
			height: "2px",
			transform: `translate(-50%, -50%) ${
				menuActive ? `rotate(-25deg)` : "translateY(-4px)"
			}`,
			top: "50%",
			left: "50%",
			content: '""',
			backgroundColor: theme.palette.primary[menuActive ? "dark" : "light"],
			transition: "transform .3s cubic-bezier(.35,.755,.42,.95)",
		},
		"&::after": {
			position: "absolute",
			width: "30px",
			height: "2px",
			transform: `translate(-50%, -50%) ${
				menuActive ? `rotate(25deg)` : "translateY(4px)"
			}`,
			top: "50%",
			left: "50%",
			content: '""',
			backgroundColor: theme.palette.primary[menuActive ? "dark" : "light"],
			transition: "transform .3s cubic-bezier(.35,.755,.42,.95)",
		},
	});

	return (
		<IconButton
			sx={burgerBtn}
			onClick={onBurgerClick}
			data-testid={"menuBtn"}
			disableRipple
		></IconButton>
	);
}

export default Burger;
