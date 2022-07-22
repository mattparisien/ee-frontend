import React from "react";
import styles from "./Hero.module.css";

function HeroWord({ word, index }) {
	return (
		<div
			className={`${styles.HeroWord} ${`${
				styles[`HeroWord_${index + 1}`]
			}`} md:text-6xl lg:text-8xl tracking-tight hidden md:block font-walsheim font-bold`}
		>
			{word}
		</div>
	);
}

export default HeroWord;
