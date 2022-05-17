import React from "react";
import Heading from "../Heading/Heading";
import { motion } from "framer-motion";
import useInView from "../../helpers/hooks/useInView";
import { ThemeContext } from "../Containers/Section";
import { useContext } from "react";

function Quote({ quote, author, paragraphSize }) {
	const { theme } = useContext(ThemeContext);

	const line = {
		flex: 0.5,
		height: "1px",
		transformOrigin: "left",
	};

	const quoteStyle = {
		textIndent: "-0.45em",
		padding: "0 0.45em",
	};

	return (
		<div className='Quote flex flex-col items-center justify-center'>
			<blockquote
				className={`quote-text text-xl md:text-${
					!paragraphSize || paragraphSize === "large" ? "3xl" : "1xl"
				}`}
				style={quoteStyle}
			>{`"${quote}"`}</blockquote>
			<div className='author-wrap w-full flex flex-row-reverse items-center justify-end mt-5'>
				<Heading
					level={6}
					wrapperClasses={`flex-2 font-semibold accent accent-text accent-tiny accent-yellow accent-${
						theme === "light" || !theme ? "multiply" : "screen"
					} relative`}
					disableMargin
				>
					{author}
				</Heading>

				<motion.div
					style={line}
					className='line bg-current block mx-4'
					initial='hidden'
					exit='exit'
				></motion.div>
			</div>
		</div>
	);
}

export default Quote;
