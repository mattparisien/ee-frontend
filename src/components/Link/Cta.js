import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Link from "next/link";
import React from "react";
import { Fade } from "react-reveal";
import styles from "./Cta.module.css";

function Cta({ children, href, mixBlend, opacity }) {
	return (
		<Fade bottom>
			<Link href={href}>
				<a
					href={href}
					className={`${
						styles.Cta
					} inline-block relative after:will-change-width after:w-12 hover:after:w-[calc(100%+2rem)] after:h-12 after:absolute after:top-1/2 after:left-0 after:rounded-[3rem] after:mix-blend-${
						mixBlend || "multiply"
					} after:opacity-${
						opacity || "1"
					} after:-translate-y-1/2 after:-translate-x-3 after:bg-yellow-custom  after:transition-all after:duration-[0.6s] after:z-[-1] ease-[cubic-bezier(.645,.045,.355,1)]`}
				>
					<CtaInner text={children} />
				</a>
			</Link>
		</Fade>
	);
}

function CtaInner({ text }) {
	return (
		<>
			<div className='CtaInner w-full h-full flex items-center justify-center'>
				<span className={`Cta_Text block uppercase text-sm font-walsheim font-medium`}>
					{text}
				</span>
				<ArrowForwardIosIcon sx={{ height: "0.5rem" }} />
			</div>
		</>
	);
}

export default Cta;
