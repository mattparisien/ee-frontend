import React from "react";
import Link from "../Link/Link";
import Heading from "../Heading/Heading";
import classNames from "classnames";

function DropdownMenuList({ navItems, toggleMenu, menuActive }) {
	const linkClasses = classNames("block hover:text-yellow-custom", {
		"opacity-0 translate-y-full": !menuActive,
		"opacity-100 translate-y-0": menuActive,
	});

	return (
		<ul className='DropdownMenuList z-50 sticky w-full  flex flex-col items-center justify-center text-center'>
			{navItems &&
				navItems.map((item, i) => (
					<li key={i} className={i !== navItems.length - 1 ? "pb-5" : ""}>
						<Heading
							level={1}
							wrapperClasses={"text-light transition color duration-400 ease"}
						>
							<Link
								isRouterLink
								href={item.path}
								onClick={toggleMenu}
								className={linkClasses}
							>
								{item.name}
							</Link>
						</Heading>
					</li>
				))}
		</ul>
	);
}

export default DropdownMenuList;
