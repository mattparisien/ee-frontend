import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Link from "next/Link";
import React from "react";
import styles from "./Cta.module.css";

function Cta({ children, target, href }) {
	return (
		<Link href={href}>
			<a href={href} className={`${styles.Cta} flex items-center`}>
				<CtaInner text={children} />
			</a>
		</Link>
	);
}

function CtaInner({ text }) {
	return (
		<>
			<span
				className={`Cta_Text block text-xl accent accent-left accent-text accent-multiply`}
			>
				{text}
			</span>
			<ArrowForwardIosIcon sx={{ height: "0.8rem" }} />
		</>
	);
}

export default Cta;
