import { useQuery } from "@apollo/client";
import React, {
	createContext,
	useContext,
	useEffect,
	useMemo,
	useState,
} from "react";
import { Helmet } from "react-helmet-async";
import SINGLEPROJECT from "../../../api/graphql/queries/GetSingleProject";
import { ColorContext, DataContext } from "../../../context/Context";
import { shuffleColors } from "../../../helpers/shuffleColors";
import formatBlockData from "../../Blocks/helpers/formatBlockData";
import { ViewContext } from "../../Containers/View";
import Next from "./Parts/Next";
import Block from "../../Blocks/Block";
import getParam from "../../Templates/Project/helpers/getParam";
import { ConstructionOutlined } from "@mui/icons-material";

export const ProjectContext = createContext();

function SingleProject({ location }) {
	const [project, setProject] = useState({
		blocks: [],
	});

	const { setCurrentColor } = useContext(ColorContext);

	const { projects } = useContext(DataContext);

	const projectId = useMemo(() => {
		if (location && projects) {
			const param = getParam(location.pathname);
			const projectId = projects.filter(
				project => project.subtitle.toLowerCase() === param
			)[0].id;

			return projectId;
		}
	}, [location, projects]);

	const accentColor = useMemo(() => {
		const color = shuffleColors();

		return color;
	}, []);

	useEffect(() => {
		accentColor && setCurrentColor(() => color);
	}, [accentColor]);

	const { loading, error, data } = useQuery(SINGLEPROJECT, {
		variables: {
			id: projectId,
		},
	});

	useEffect(() => {
		console.log(data);
		if (data && !loading && !project.blocks[0]) {
			console.log(data, "the data");
			const blocks = formatBlockData(data.project.data.attributes.Choose);

			blocks.forEach(block => {
				block.then(blockInfo => {
					setProject(prev => ({
						styles: {
							color: accentColor,
						},
						title: data.project.data.attributes.Title,
						subtitle: data.project.data.attributes.Subtitle,
						featureImage: {
							url: data.project.data.attributes.FeatureImage.data.attributes
								.url,
							alt: data.project.data.attributes.FeatureImage.data.attributes
								.alternativeText,
							caption:
								data.project.data.attributes.FeatureImage.data.attributes
									.caption,
						},
						blocks: [
							...prev.blocks,
							{ name: blockInfo.name, data: { ...blockInfo.data } },
						],
					}));
				});
			});
		}

		// if (error) {
		// 	setViewError(() => ({
		// 		statusCode: error.statusCode,
		// 		message: error.message,
		// 	}));
		// }
	}, [data, loading]);

	return (
		<ProjectContext.Provider>
			<Helmet>
				<title>
					{project && project.title
						? `${project.title} - ${project.subtitle}`
						: "Eyes & Ears Agency"}
				</title>
			</Helmet>

			{project.featureImage && (
				<Block
					name='HeroBlock'
					data={{
						title: project.title,
						subtitle: project.subtitle,
						image: {
							url: project.featureImage.url,
							alt: project.featureImage.alt,
							caption: project.featureImage.caption,
						},
					}}
				/>
			)}

			{project &&
				project.blocks.map((block, i) => <Block {...block} key={i} />)}

			<Next color={accentColor[1]} currentProjectId={projectId} projects={projects} />
		</ProjectContext.Provider>
	);
}

export default SingleProject;
