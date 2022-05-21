import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import React from "react";
import styles from "./ScrollDownCta.module.css";

function ScrollDownCta() {
	return (
		<div  className={styles.ScrollDownCta}>
			<ArrowBackIosIcon sx={{ transform: "rotate(-90deg)" }} />
		</div>
	);
}

export default ScrollDownCta;
