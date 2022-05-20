import React from "react";
import Link from "next/Link";
import classNames from "classnames";

function NavDesktop({ navItems, isIntroComplete }) {
	const linkClasses = classNames(
		"transition duration-[800ms] ease-[cubic-bezier(.215,.61,.355,1)] cursor-pointer",
		{
			"opacity-0 translate-y-full": !isIntroComplete,
		}
	);

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
							<Link href={item.Slug}>
								<a
									href={item.slug}
									className={linkClasses}
									style={{transitionDelay: `${i}00ms`}}
								>
									{item.Name}
								</a>
							</Link>
						</li>
					))}
			</ul>
		</nav>
	);
}

export default NavDesktop;
