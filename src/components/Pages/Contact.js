import React from "react";
import { motion } from "framer-motion";
import Section from "../Section";

function Contact() {
	return (
		<div>
			<motion.div
				class='transition-card'
				initial={{ translateY: "0" }}
				animate={{  translateY: "-100%" }}
				exit={{ translateY: "0%" }}
				transition={{ duration: 0.6, ease: "easeInOut" }}
			></motion.div>
			<Section classes={"-bg-dark"} />
		</div>
	);
}

export default Contact;
