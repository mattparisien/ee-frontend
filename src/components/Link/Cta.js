import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Link from "next/Link";
import React from "react";

function Cta({ children, target, href }) {
	const styles = theme => ({
		marginTop: "2.5rem",
		[theme.breakpoints.up("sm")]: {
			marginTop: "4rem",
		},
		display: "flex",
		alignItems: "center",
		justifyContent: "flex-start",
		"&:hover::after": {
			transform: `scale(1.6)translateY(-30%)`,
			transformOrigin: "center",
		},
		"&:hover .inner": {
			transform: "translateX(1rem)",
		},
	});

	return (
		<Link href={href}>
			<a href={href} className={`flex items-center`}>
				<CtaInner text={children} />
			</a>
		</Link>
	);
}

function CtaInner({ text }) {
	return (
		<>
			<span
				className={`CtaInner text-xl accent accent-left accent-text accent-multiply`}
			>
				{text}
			</span>
			<ArrowForwardIosIcon sx={{ height: "0.8rem" }} />
		</>
	);
}

export default Cta;
