import { motion } from "framer-motion/dist/framer-motion";
import React, { createContext } from "react";
import VIEWS from "../Views/index";
import Page from "./Page";

export const ViewContext = createContext();

function View({ location, pageId, name }) {
	const containerVariants = {
		hidden: {
			opacity: 0,
		},
		visible: {
			opacity: 1,
			transition: { delay: 0.2, duration: 0.5 },
		},
		exit: {
			opacity: 0,
			transition: { ease: "easeInOut", duration: 0.5, delay: 0.5 },
		},
	};

	return (
		<ViewContext.Provider>
			<Page location={location} name={name}>
				<motion.div
					variants={containerVariants}
					initial={"hidden"}
					animate='visible'
					exit='exit'
				>
					{React.createElement(VIEWS[name], {
						location: location,
						pageId: pageId,
					})}
				</motion.div>
			</Page>
		</ViewContext.Provider>
	);
}

export default View;
