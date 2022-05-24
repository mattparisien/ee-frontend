import React from "react";
import styles from "./Hero.module.css";

function HeroWord({ word, index }) {
	return (
		<div
			className={`${styles.HeroWord} ${`${
				styles[`HeroWord_${index + 1}`]
			}`} md:text-8xl lg:text-9xl tracking-tight hidden md:block`}
		>
			{word}
		</div>
	);
}

export default HeroWord;
