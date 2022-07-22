import classNames from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";
import { HeaderContext } from "./Header";
import styles from "./NavItem.module.css";
import { GlobalContext } from "../../lib/context";

function NavItem({ slug, index, name, isIntroComplete }) {
	const router = useRouter();
	const [active, setActive] = useState(false);
	const { headerTheme } = useContext(HeaderContext);
	const { toggleModal } = useContext(GlobalContext);

	useEffect(() => {
		let currSlug = "/";

		if (router.route !== "/") {
			currSlug = router.route[1] + router.route.slice(2, router.route.length);
		}

		if (
			currSlug === slug ||
			(currSlug.includes("projects") && slug === "projects")
		) {
			setActive(true);
		} else {
			setActive(false);
		}
	}, [router.route, slug]);

	const itemClasses = classNames(
		`${styles.NavItem} NavItem flex items-end w-auto transition-opacity ease duration-300 hover:opacity-100 font-semibold`,
		{ "opacity-60": !active }
	);

	const linkClasses = classNames(
		`relative transition duration-[800ms] ease-[cubic-bezier(.215,.61,.355,1)] cursor-pointer`,
		{
			"opacity-0 translate-y-full": !isIntroComplete,
			"ml-10": index !== 0,
		}
	);

	const underlineClasses = classNames(
		"link-underline after:absolute after:bottom-0 after:left-0 after:w-full after:h-px after:mix-blend-multiply",
		{
			"after:scale-x-0": !active,
			"after:bg-dark": headerTheme === "light",
			"after:bg-light": headerTheme === "dark",
		}
	);

	return (
		<li className={itemClasses}>
			{slug !== "/contact" ? <Link href={`/${slug}`}>
				<a
					href={`/${slug}`}
					className={linkClasses}
					style={{ transitionDelay: `${index}00ms` }}
				>
					{name}
					<span className={underlineClasses}></span>
				</a>
			</Link> : <button onClick={toggleModal} className={linkClasses}>Contact</button>}
		</li>
	);
}

export default NavItem;
