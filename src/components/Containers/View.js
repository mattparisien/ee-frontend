import { useQuery } from "@apollo/client";
import React, { useContext, useEffect, useState } from "react";
import PAGE from "../../api/graphql/queries/GetPage";
import { LoadingContext } from "../../context/Context";
import Block from "../Blocks/Block";
import formatBlockData from "../Blocks/helpers/formatBlockData";
import Template from "../Templates/Template";
import Page from "./Page";
import { motion } from "framer-motion/dist/framer-motion";

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

	const containerVariants = {
		hidden: {
			opacity: 0,
		},
		visible: {
			opacity: 1,
			transition: { delay: 0.8, duration: 1 },
		},
		exit: {
			opacity: 0,
			transition: { ease: "easeInOut", duration: 1, delay: 0.1 },
		},
	};

	return (
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
	);
}

export default View;
