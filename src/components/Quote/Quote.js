import { motion } from "framer-motion";
import React, { useContext } from "react";
import { ThemeContext } from "../Containers/Section";
import Heading from "../Heading/Heading";
import { useMediaQuery } from "@mui/material";


function Quote({ quote, author, paragraphSize }) {

	const matches = useMediaQuery(`(min-width: 769px)`);

	const { theme } = useContext(ThemeContext);

	const quoteStyle = {
		textIndent: "-0.45em",
		padding: "0 0.45em",
	};

	return (
		<div className='Quote flex flex-col items-center justify-center'>
			<blockquote
				className={`quote-text text-md md:text-2xl`}
				style={quoteStyle}
			>{`"${quote}"`}</blockquote>
			<div className='author-wrap w-full flex flex-row-reverse items-center justify-end mt-5 mr-auto w-full'>
				<Heading
					level={matches ? 6 : 5}
					wrapperClasses={`font-semibold accent accent-text accent-tiny accent-yellow accent-${
						theme === "light" || !theme ? "multiply" : "screen"
					} relative`}
					disableMargin
				>
					{author}
				</Heading>

				<motion.div
					className='line bg-current block mx-4 h-px w-20 md:w-40'
					initial='hidden'
					exit='exit'
				></motion.div>
			</div>
		</div>
	);
}

export default Quote;
