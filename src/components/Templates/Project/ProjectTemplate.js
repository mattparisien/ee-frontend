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
import { ViewContext } from "../../Containers/View";
import getParam from "./helpers/getParam";
import getProjectIdByTitle from "./helpers/getProjectIdByTitle";
import Next from "./Parts/Next";

export const ProjectContext = createContext();

function ProjectTemplate({ location }) {
	const [id, setId] = useState(null);
	const [project, setProject] = useState(null);

	const { setCurrentColor } = useContext(ColorContext);
	const { setTemplateLoaded } = useContext(ViewContext);
	const { projects } = useContext(DataContext);

	const accentColor = useMemo(() => {
		const color = shuffleColors();

		return color;
	}, []);

	useEffect(() => {
		accentColor && setCurrentColor(() => color);
	}, [accentColor]);

	useEffect(() => {
		//Find query param
		if (!id && projects) {
			const param = getParam(location.pathname);
			const id = getProjectIdByTitle(param, projects);

			setId(id);
		}
	}, [location, id, projects]);

	const { loading, error, data } = useQuery(SINGLEPROJECT, {
		variables: {
			id: id,
		},
		skip: !id,
	});

	useEffect(() => {
		if (data && !loading) {
			setProject(() => ({
				styles: {
					color: accentColor,
				},
				data: {
					id: data.project.data.id,
					title: data.project.data.attributes.Title,
					subtitle: data.project.data.attributes.Subtitle,
					subtitle: data.project.data.attributes.Subtitle,
					featureImage: {
						url: data.project.data.attributes.FeatureImage.data.attributes.url,
						alt: data.project.data.attributes.FeatureImage.data.attributes
							.alternativeText,
						caption:
							data.project.data.attributes.FeatureImage.data.attributes.caption,
					},
					blocks: formatBlockData(data.project.data.attributes.Choose),
				},
			}));

			setTemplateLoaded();
		}
	}, [data, loading, accentColor]);

	return (
		<ProjectContext.Provider
			value={{
				projectColor: project && project.styles.accentColor,
			}}
		>
			<Helmet>
				<title>
					{project && project.data
						? `${project.data.title} - ${project.data.subtitle}`
						: "Eyes & Ears Agency"}
				</title>
			</Helmet>

			{project && (
				<Block
					name='HeroBlock'
					data={{
						title: project.data.title,
						subtitle: project.data.subtitle,
						image: {
							url: project.data.featureImage.url,
							alt: project.data.featureImage.alt,
							caption: project.data.featureImage.caption,
						},
					}}
				/>
			)}

			{project &&
				project.data.blocks.map((block, i) => <Block {...block} key={i} />)}

			<Next color={accentColor[1]} currentProjectId={id} projects={projects} />
		</ProjectContext.Provider>
	);
}

export default ProjectTemplate;
