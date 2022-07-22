import classNames from "classnames";
import { useContext } from "react";
import { GlobalContext } from "../../lib/context";
import styles from "./Burger.module.css";
import { HeaderContext } from "./Header";

function Burger({ dropdownActive, isIntroComplete, headerTheme }) {
	const { toggleDropdown } = useContext(GlobalContext);

	const pseudoClasses = {
		common:
			"after:absolute before:absolute after:top-1/2 after:left-1/2 after:w-[30px] after:h-[2px] before:top-1/2 before:left-1/2 before:w-[30px] before:h-[2px] before:transition before:duration-[300ms] before:ease-[cubic-bezier(0.35, 0.755, 0.42, 0.95)] after:transition after:duration-[300ms] after:ease-[cubic-bezier(0.35, 0.755, 0.42, 0.95)]",
	};

	const classes = classNames(
		`Burger ${
			dropdownActive ? styles.isClose : styles.isBurger
		} relative block h-7 w-16 rounded-3xl md:hidden ${
			pseudoClasses.common
		} transition duration-[700ms] ease-[cubic-bezier(.215,.61,.355,1)]`,
		{
			"is-close bg-light before:bg-dark after:bg-dark":
				headerTheme === "dark" || dropdownActive,
			"is-burger bg-dark before:bg-light after:bg-light":
				!dropdownActive || !headerTheme === "dark",
			"before:-translate-y-1/2 after:-translate-y-1/2 before:-translate-x-1/2 after:-translate-x-1/2":
				dropdownActive,
			"before:rotate-[20deg] after:-rotate-[20deg]": dropdownActive,
			"-translate-y-full opacity-0": !isIntroComplete,
		}
	);

	return (
		<button
			className={classes}
			onClick={toggleDropdown}
			data-testid={"menuBtn"}
		></button>
	);
}

export default Burger;
