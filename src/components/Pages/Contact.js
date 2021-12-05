import React from "react";
import { motion } from "framer-motion";
import Section from "../Section";

function Contact() {
	return (
		<>
			<div>
				<motion.div
					class='transition-card'
					initial={{ translateX: "-100%" }}
					animate={{ translateX: "0" }}
					exit={{ translateX: "-100%" }}
					transition={{ duration: 0.8, ease: "easeInOut" }}
				>
					<Section classes={"-bg-dark"} />
				</motion.div>
			</div>
		</>
	);
}

export default Contact;
