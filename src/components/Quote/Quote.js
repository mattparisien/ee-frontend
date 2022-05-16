import React from "react";
import Heading from "../Heading/Heading";
import { motion } from "framer-motion";
import useInView from "../../helpers/hooks/useInView";

function Quote({ quote, author }) {
	const { ref, inView } = useInView();

	const line = {
		flex: 0.5,
		height: "1px",
		transformOrigin: "left",
	};

	const quoteStyle = {
		textIndent: "-0.45em",
		padding: "0 0.45em",
	};

	// const lineVariants = {
	// 	hidden: {
	// 		scaleX: 0,
	// 	},
	// 	visible: {
	// 		scaleX: 1,

	// 		transition: {
	// 			ease: [0.86, 0, 0.07, 0.995],
	// 			duration: 1,
	// 		},
	// 	},
	// 	exit: {
	// 		scaleX: 0,
	// 		transition: {
	// 			ease: [0.86, 0, 0.07, 0.995],
	// 			duration: 1,
	// 		},
	// 	},
	// };

	return (
		<div className='Quote flex flex-col items-center justify-center'>
			<blockquote
				className='quote-text text-xl md:text-3xl'
				style={quoteStyle}
			>{`"${quote}"`}</blockquote>
			<div className='author-wrap w-full flex flex-row-reverse items-center  justify-end mt-5'>
				<Heading level={6} wrapperClasses={"flex-2 font-semibold"}>
					{author}
				</Heading>

				<motion.div
					style={line}
					className='line bg-current block mx-4'
					// variants={lineVariants}
					initial='hidden'
					animate={inView && "visible"}
					exit='exit'
				></motion.div>
			</div>
		</div>
	);
}

export default Quote;
