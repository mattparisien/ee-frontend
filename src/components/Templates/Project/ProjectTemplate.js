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

export const ProjectContext = createContext();

function ProjectTemplate({ location }) {
	const [id, setId] = useState(null);
	const [project, setProject] = useState({
		blocks: [],
	});

	const { setCurrentColor } = useContext(ColorContext);
	const { setTemplateLoaded, setViewError } = useContext(ViewContext);
	const { projects } = useContext(DataContext);

	const accentColor = useMemo(() => {
		const color = shuffleColors();

		return color;
	}, []);

	useEffect(() => {

		console.log('accnet color', accentColor)

		accentColor && setCurrentColor(accentColor);
	}, [accentColor]);

	// useEffect(() => {
	// 	//Find query param
	// 	if (!id && projects) {
	// 		const param = getParam(location.pathname);
	// 		const id = getProjectIdByTitle(param, projects);

	// 		setId(id);
	// 	}
	// }, [location, id, projects]);

	const { loading, error, data } = useQuery(SINGLEPROJECT, {
		variables: {
			id: 1,
		},
	});

	useEffect(() => {
		if (data && !loading && !project.blocks[0]) {
			const blocks = formatBlockData(data.project.data.attributes.Choose);

			blocks.forEach(block => {
				block.data.then(blockInfo => {
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
							{ name: block.name, data: { ...blockInfo } },
						],
					}));
				});
			});

			setTemplateLoaded();
		}

		if (error) {
			setViewError(() => ({
				statusCode: error.statusCode,
				message: error.message,
			}));
		}
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

			{/* {project.featureImage && (
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

			<Next color={accentColor[1]} currentProjectId={id} projects={projects} /> */}
		</ProjectContext.Provider>
	);
}

export default ProjectTemplate;
