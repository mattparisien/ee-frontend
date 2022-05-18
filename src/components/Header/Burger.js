import classNames from "classnames";
import "./Burger.module.css";
import useGlobalStore from "../../store/globalStore";

function Burger() {
	const { dropdownActive, toggleDropdown } = useGlobalStore(state => ({
		dropdownActive: state.dropdownActive,
		toggleDropdown: state.toggleDropdown,
	}));

	const pseudoClasses = {
		common:
			"after:absolute before:absolute after:top-1/2 after:left-1/2 after:w-[30px] after:h-[2px] before:top-1/2 before:left-1/2 before:w-[30px] before:h-[2px] after:transition after:transform after:duration-[300ms] after:ease-[cubic-bezier(0.35, 0.755, 0.42, 0.95)]",
	};

	const classes = classNames(
		`Burger relative block h-7 w-16 rounded-3xl md:hidden ${pseudoClasses.common} `,
		{
			"is-close bg-light before:bg-dark after:bg-dark": dropdownActive,
			"is-burger bg-dark before:bg-light after:bg-light": !dropdownActive,
			"before:translate-y-[2.4px] after:-translate-y-[2.4px] ": !dropdownActive,
			"before:-translate-y-1/2 before:-translate-x-1/2 after:-translate-y-1/2 after:-translate-x-1/2 ":
				!dropdownActive,
			"before:-translate-y-1/2 after:-translate-y-1/2 before:-translate-x-1/2 after:-translate-x-1/2":
				dropdownActive,
			"before:rotate-[20deg] after:-rotate-[20deg]": dropdownActive,
		}
	);

	return (
		<button
			className={classes}
			onClick={() => toggleDropdown()}
			data-testid={"menuBtn"}
		></button>
	);
}

export default Burger;
