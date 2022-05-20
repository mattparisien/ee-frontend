import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Link from "next/Link";
import React from "react";
import styles from "./Cta.module.css";

function Cta({ children, target, href }) {
	return (
		<Link href={href}>
			<a
				href={href}
				className={`${styles.Cta} inline-block relative after:will-change-width after:w-12 hover:after:w-[calc(100%+2rem)] after:h-12 after:absolute after:top-1/2 after:left-0 after:rounded-[3rem] after:mix-blend-multiply after:-translate-y-1/2 after:-translate-x-3 after:bg-yellow-custom  after:transition-all after:duration-[0.6s] ease-[cubic-bezier(.645,.045,.355,1)]`}
			>
				<CtaInner text={children} />
			</a>
		</Link>
	);
}

function CtaInner({ text }) {
	return (
		<>
			<div className='CtaInner w-full h-full flex items-center'>
				<span className={`Cta_Text block text-xl`}>{text}</span>
				<ArrowForwardIosIcon sx={{ height: "0.8rem" }} />
			</div>
		</>
	);
}

export default Cta;
