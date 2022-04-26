import React from "react";
import { motion } from "framer-motion/dist/framer-motion";
import { useInView } from "react-intersection-observer";

function Fade({ children, wrapper, childStyle }) {
	const { ref, inView, entry } = useInView();

	const variants = {
		hidden: {
			opacity: 0,
		},
		visible: {
			opacity: 1,
			transition: { ease: "easeInOut", duration: 0.5, delay: 0.1 },
		},
	};

	return wrapper(
		children.map((child, i) => (
			<motion.div
				key={i}
				className='fade-child-wrap'
				ref={ref}
				variants={variants}
				initial={"hidden"}
				animate={inView && "visible"}
			>
				{child}
			</motion.div>
		))
	);
}

export default Fade;
