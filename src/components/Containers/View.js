import { useQuery } from "@apollo/client";
import React, { useContext, useEffect, useState, useRef } from "react";
import PAGE from "../../api/graphql/queries/GetPage";
import { LoadingContext } from "../../context/Context";
import Block from "../Blocks/Block";
import formatBlockData from "../Blocks/helpers/formatBlockData";
import Template from "../Templates/Template";
import Page from "./Page";
import { motion } from "framer-motion/dist/framer-motion";
import { Box } from "@mui/material";
import SplitText from "gsap/dist/SplitText";
import gsap from "gsap";
import $ from "jquery";

function View({ location, pageId }) {
	const { loading, error, data } = useQuery(PAGE, {
		variables: {
			id: pageId,
		},
	});

	const [page, setPage] = useState({
		id: null,
		name: null,
		template: null,
		blocks: null,
	});

	const viewRef = useRef(null);

	const { setLoading } = useContext(LoadingContext);

	useEffect(() => {
		if (data && !loading) {
			setPage(() => ({
				id: pageId,
				name: data.page.data.attributes.Name,
				template: data.page.data.attributes.template,
				blocks:
					data.page.data.attributes.Choose.length >= 1 &&
					formatBlockData(data.page.data.attributes.Choose),
			}));

			setLoading(false);
		}
	}, [loading, data, error]);

	// useEffect(() => {
	// 	gsap.registerPlugin(SplitText);

	// 	const checker = setInterval(() => {
	// 		if (viewRef.current) {
	// 			const elements = $(viewRef.current).find("h1 div");

	// 			if (!elements.length <= 0) {
	// 				console.log(elements);
	// 				stopFunction();
	// 			}
	// 			const split = new SplitText(elements, {
	// 				type: "chars",
	// 				charsClass: "char"
	// 			});
	// 		}
	// 	}, 30);

	// 	const stopFunction = () => {
	// 		clearInterval(checker);
	// 	};
	// }, [location]);

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
			transition: { ease: "easeInOut", duration: 0.5, delay: 0.1 },
		},
	};

	return (
		<Box className='View' ref={viewRef}>
			<Page location={location}>
				<motion.div
					variants={containerVariants}
					initial={"hidden"}
					animate='visible'
					exit='exit'
				>
					<Template
						location={location}
						name={
							page.template &&
							page.template.data &&
							page.template.data.attributes.Name
						}
					/>
					{page &&
						page.blocks &&
						page.blocks.map((block, i) => <Block {...block} key={i} />)}
				</motion.div>
			</Page>
		</Box>
	);
}

export default View;
