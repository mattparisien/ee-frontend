import { motion } from "framer-motion";
import React from "react";

function MediaTransition() {
	const swiperVariants = {
		hidden: {
			scaleY: 1,
		},
		visible: {
			scaleY: 0,
			transition: { duration: 1.3, ease: [0.86, 0, 0.07, 0.995], delay: 0.3 },
		},
		exit: {
			scaleY: 1,
			transition: { duration: 1.3, ease: [0.86, 0, 0.07, 0.995] },
		},
	};

	return (
		<motion.div
			className='MediaTransition w-full h-full absolute top-0 left-0 bg-light origin-bottom'
			variants={swiperVariants}
			animate='visible'
			initial='hidden'
			exit='exit'
		></motion.div>
	);
}

export default MediaTransition;
