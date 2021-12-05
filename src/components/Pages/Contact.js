import React from "react";
import { motion } from "framer-motion";
import Section from "../Section";

function Contact() {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
		>
			<div>
				<Section classes={"-bg-dark"}/>
			</div>
		</motion.div>
	);
}

export default Contact;
