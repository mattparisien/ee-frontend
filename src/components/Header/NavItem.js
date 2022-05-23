import React, { useEffect, useState } from "react";
import classNames from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";
import { CompareSharp } from "@mui/icons-material";

function NavItem({ slug, index, name, isIntroComplete }) {
	const router = useRouter();
	const [active, setActive] = useState(false);

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
		"NavItem flex items-end w-auto transition-opacity ease duration-300 hover:opacity-100 font-semibold",
		{ "opacity-60": !active }
	);

	const linkClasses = classNames(
		"relative transition duration-[800ms] ease-[cubic-bezier(.215,.61,.355,1)] cursor-pointer",
		{
			"opacity-0 translate-y-full": !isIntroComplete,
			"ml-10": index !== 0,
			"after:absolute after:bottom-0 after:left-0 after:w-full after:h-px after:bg-dark":
				active,
		}
	);

	return (
		<li className={itemClasses}>
			<Link href={`/${slug}`}>
				<a
					href={`/${slug}`}
					className={linkClasses}
					style={{ transitionDelay: `${index}00ms` }}
				>
					{name}
				</a>
			</Link>
		</li>
	);
}

export default NavItem;
