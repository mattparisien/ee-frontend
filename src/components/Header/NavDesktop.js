import React from "react";
import Link from "../Link/Link";

function NavDesktop({ navItems }) {
	return (
		<nav className='NavDesktop hidden md:block' data-testid='navDesktop'>
			<ul className='flex'>
				{navItems &&
					navItems.map((item, i) => (
						<li
							className={`listItem_${i + 1} flex items-end ${
								i !== navItems.length - 1 ? "pr-10" : ""
							} w-auto opacity-50 transition ease duration-400 hover:opacity-100`}
							key={i}
						>
							<Link isRouterLink href={item.path}>
								{item.name}
							</Link>
						</li>
					))}
			</ul>
		</nav>
	);
}

export default NavDesktop;
