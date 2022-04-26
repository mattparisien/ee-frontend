import { useQuery } from "@apollo/client";
import { Box } from "@mui/material";
import { motion } from "framer-motion/dist/framer-motion";
import React, {
	createContext,
	useContext,
	useEffect,
	useRef,
	useState,
} from "react";
import PAGE from "../../api/graphql/queries/GetPage";
import { LoadingContext } from "../../context/Context";
import Block from "../Blocks/Block";
import formatBlockData from "../Blocks/helpers/formatBlockData";
import Template from "../Templates/Template";
import Page from "./Page";

export const ViewContext = createContext();

function View({ location, pageId }) {
	const [isViewLoaded, setViewLoaded] = useState({
		blockLoaded: false,
		templateLoaded: false,
	});

	const { loading, error, data } = useQuery(PAGE, {
		variables: {
			id: pageId,
		},
	});

	const [page, setPage] = useState({
		id: null,
		name: null,
		blocks: null,
		template: null,
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

			setViewLoaded(prev => ({
				...prev,
				blockLoaded: true,
			}));
		}

		return () => {
			setLoading(true);
		};
	}, [loading, data, error]);

	useEffect(() => {
		const isAllKeysTruthy = Object.values(isViewLoaded).every(
			val => val === true
		);

		if (page.template && page.blocks && page.template.data && isAllKeysTruthy) {
			//If the page has a template and blocks, and everything is loaded within those

			setLoading(false);
		} else if (
			page.template &&
			!page.template.data &&
			page.blocks &&
			isViewLoaded.blockLoaded
		) {
			//If the page has no template but has blocks and blocks are loaded

			setLoading(false);
		} else if (
			page.template &&
			page.template.data &&
			!page.blocks &&
			isViewLoaded.templateLoaded
		) {
			setLoading(false);
		}
	}, [isViewLoaded, page]);

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

	const setTemplateLoaded = () => {
		setViewLoaded(prev => ({ ...prev, templateLoaded: true }));
	};

	const contextControls = {
		setTemplateLoaded,
	};

	return (
		<ViewContext.Provider value={contextControls}>
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
		</ViewContext.Provider>
	);
}

export default View;
