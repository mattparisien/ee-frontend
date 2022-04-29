import { Box } from "@mui/material";
import axios from "axios";
import { motion } from "framer-motion/dist/framer-motion";
import React, {
	createContext,
	useContext,
	useEffect,
	useRef,
	useState,
} from "react";
import { DataContext } from "../../context/Context";
import Block from "../Blocks/Block";
import formatBlockData from "../Blocks/helpers/formatBlockData";
import getParam from "../Templates/Project/helpers/getParam";
import getProjectIdByTitle from "../Templates/Project/helpers/getProjectIdByTitle";

import Page from "./Page";
import VIEWS from "../Views/index";

export const ViewContext = createContext();

function View({ location, pageId, menuActive, setMenuActive, navItems, name }) {
	// const [isViewLoaded, setViewLoaded] = useState({
	// 	blockLoaded: false,
	// 	templateLoaded: false,
	// });
	// const [viewError, setViewError] = useState(null);
	// const { projects } = useContext(DataContext);

	// const [loading, setLoading] = useState(true);
	// const [error, setError] = useState(false);

	// const [page, setPage] = useState({
	// 	id: null,
	// 	name: null,
	// 	project: null,
	// 	template: null,
	// });

	// const viewRef = useRef(null);

	// useEffect(() => {
	// 	const getTemplateData = async () => {
	// 		const param = getParam(location.pathname);
	// 		console.log(param);
	// 		const projectId = getProjectIdByTitle(param, projects);

	// 		const url =
	// 			process.env.REACT_APP_API_URL +
	// 			"/projects/" +
	// 			projectId +
	// 			"?populate=deep,10";

	// 		try {
	// 			const resp = await axios.get(url);
	// 			return resp.data.data;
	// 		} catch (err) {
	// 			setError(err);
	// 		}
	// 	};

	// 	//Get page data

	// 	if (!location.pathname === "projects") {
	// 		const getPageData = async () => {
	// 			try {
	// 				const url =
	// 					process.env.REACT_APP_API_URL + "/pages/" + pageId + "?populate=*";
	// 				const resp = await axios.get(url);

	// 				if (resp.data.data.attributes.template) {
	// 					const templateData = await getTemplateData();

	// 					const blocks = await formatBlockData(
	// 						templateData.attributes.Choose
	// 					);

	// 					blocks.forEach(block => {
	// 						block.then(info => {
	// 							setPage(prev => ({
	// 								...prev,
	// 								template: "project",

	// 								project: {
	// 									title: templateData.attributes.Title,
	// 									subtitle: templateData.attributes.Subtitle,
	// 									featureImage: {
	// 										url: templateData.attributes.FeatureImage.data.attributes
	// 											.url,
	// 										alt: templateData.attributes.FeatureImage.data.attributes
	// 											.alternativeText,
	// 										caption:
	// 											templateData.attributes.FeatureImage.data.attributes
	// 												.caption,
	// 									},
	// 									blocks:
	// 										prev.project && prev.project.blocks
	// 											? [...prev.project.blocks, { ...info }]
	// 											: [{ ...info }],
	// 								},
	// 							}));
	// 						});
	// 					});
	// 				}
	// 			} catch (err) {
	// 				setError(err);
	// 			}
	// 		};

	// 		if (pageId && projects[0] && !page.project) {
	// 			getPageData();
	// 		}
	// 	}
	// }, [pageId, projects]);

	// useEffect(() => {
	// 	const isAllKeysTruthy = Object.values(isViewLoaded).every(
	// 		val => val === true
	// 	);

	// 	if (page.template && page.blocks && page.template.data && isAllKeysTruthy) {
	// 		//If the page has a template and blocks, and everything is loaded within those

	// 		setLoading(false);
	// 	} else if (
	// 		page.template &&
	// 		!page.template.data &&
	// 		page.blocks &&
	// 		isViewLoaded.blockLoaded
	// 	) {
	// 		//If the page has no template but has blocks and blocks are loaded

	// 		setLoading(false);
	// 	} else if (
	// 		page.template &&
	// 		page.template.data &&
	// 		!page.blocks &&
	// 		isViewLoaded.templateLoaded
	// 	) {
	// 		setLoading(false);
	// 	}
	// }, [isViewLoaded, viewError, page]);

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

	// const setTemplateLoaded = () => {
	// 	setViewLoaded(prev => ({ ...prev, templateLoaded: true }));
	// };

	// const contextControls = {
	// 	setTemplateLoaded,
	// 	setViewError,
	// };

	return (
		<ViewContext.Provider>
			<Page location={location}>
				<motion.div
					variants={containerVariants}
					initial={"hidden"}
					animate='visible'
					exit='exit'
				>
					{React.createElement(VIEWS[name], { location: location })}
				</motion.div>
			</Page>
		</ViewContext.Provider>
	);
}

export default View;
