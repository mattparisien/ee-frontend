import React from "react";
import Heading from "../Heading/Heading";
import classNames from "classnames";
import Link from "next/Link";

function DropdownMenuList({ navItems, toggleMenu, menuActive }) {
	const linkClasses = classNames(
		"block hover:text-yellow-custom transition duration-[300ms] ease-[cubic-bezier(0.55, 0.055, 0.675, 0.19)]",
		{
			"opacity-0 translate-y-full": !menuActive,
			"opacity-100 translate-y-0": menuActive,
		}
	);

	return (
		<ul className='DropdownMenuList z-50 sticky w-full  flex flex-col items-center justify-center text-center'>
			{navItems &&
				navItems.map((item, i) => (
					<li key={i} className={i !== navItems.length - 1 ? "pb-5" : ""}>
						<Heading
							level={1}
							wrapperClasses={"text-light transition color duration-400 ease"}
						>
							<Link href={item.Slug} onClick={toggleMenu}>
								<a
									className={linkClasses}
									style={{
										transition:
											"opacity 0.3s cubic-bezier(0.55, 0.055, 0.675, 0.19) transform 0.3s cubic-bezier(0.55, 0.055, 0.675, 0.19)",
									}}
								>
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
