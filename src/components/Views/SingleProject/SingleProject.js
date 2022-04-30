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
import Block from "../../Blocks/Block";
import formatBlockData from "../../Blocks/helpers/formatBlockData";
import getParam from "../../Templates/Project/helpers/getParam";
import Next from "./Parts/Next";

export const ProjectContext = createContext();

function SingleProject({ location }) {
	const [project, setProject] = useState({
		blocks: [],
	});

	const { setCurrentColor } = useContext(ColorContext);

	const { projects } = useContext(DataContext);

	const projectId = useMemo(() => {
		if (location && projects[0]) {
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
		if (data && !loading && !project.blocks[0]) {
			const blocks = formatBlockData(data.project.data.attributes.Choose);

			blocks.forEach(block => {
				block.then(blockInfo => {
					if (blockInfo) {
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
					}
				});
			});
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

			<Next
				color={accentColor[1]}
				currentProjectId={projectId}
				projects={projects}
			/>
		</ProjectContext.Provider>
	);
}

export default SingleProject;