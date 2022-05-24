import React from "react";
import Heading from "../Heading/Heading";
import classNames from "classnames";
import Link from "next/Link";
import styles from "./DropdownMenu.module.css";

function DropdownMenuList({ navItems, toggleMenu, menuActive }) {
	const linkClasses = classNames(
		`${styles.DropdownLink} block hover:text-yellow-custom`,
		{
			"opacity-0 translate-y-full": !menuActive,
			"opacity-100 translate-y-0": menuActive,
		}
	);

	return (
		<ul
			className={`${
				menuActive ? styles.DropdownMenuList : ""
			} z-50 sticky w-full  flex flex-col items-center justify-center text-center`}
		>
			{navItems &&
				navItems.map((item, i) => (
					<li key={i} className={i !== navItems.length - 1 ? "pb-5" : ""}>
						<Heading
							level={1}
							wrapperClasses={"text-light transition color duration-400 ease"}
						>
							<Link href={item.Slug}>
								<a onClick={toggleMenu} className={linkClasses}>
									{item.Name}
								</a>
							</Link>
						</Heading>
					</li>
				))}
		</ul>
	);
}

export default DropdownMenuList;
