import React from "react";
import Link from "next/Link";

function NavDesktop({ navItems }) {
	return (
		<nav className='NavDesktop hidden md:block' data-testid='navDesktop'>
			<ul className='flex'>
				{navItems &&
					navItems.map((item, i) => (
						<li
							className={`listItem_${i + 1} flex items-end ${
								i !== navItems.length - 1 ? "pr-10" : ""
							} w-auto opacity-50 transition-opacity ease duration-300 hover:opacity-100`}
							key={i}
						>
							<Link href={item.Slug}>{item.Name}</Link>
						</li>
					))}
			</ul>
		</nav>
	);
}

export default NavDesktop;
