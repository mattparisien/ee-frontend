import classNames from "classnames";
import "./Burger.css";

function Burger({ menuActive, onBurgerClick, isIntroDone }) {
	const classes = classNames(
		"Burger relative block h-7 w-20 rounded-3xl md:hidden",
		{
			"is-close bg-light": menuActive,
			"is-burger bg-dark": !menuActive,
		}
	);

	return (
		<button
			className={classes}
			onClick={onBurgerClick}
			data-testid={"menuBtn"}
		></button>
	);
}

export default Burger;
