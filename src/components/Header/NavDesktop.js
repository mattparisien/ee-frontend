import React from "react";
import NavItem from "./NavItem";

function NavDesktop({ navItems, isIntroComplete }) {

	console.log(navItems)

	return (
		<nav className='NavDesktop hidden md:block' data-testid='navDesktop'>
			<ul className='flex'>
				{navItems &&
					navItems.map((item, i) => (
						<NavItem
							slug={item.Slug}
							index={i}
							isIntroComplete={isIntroComplete}
							name={item.Name}
						/>
					))}
			</ul>
		</nav>
	);
}

export default NavDesktop;
