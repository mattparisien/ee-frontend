import useAxios from "axios-hooks";
import React, {
	createContext,
	useContext,
	useEffect,
	useMemo,
	useState,
} from "react";
import { Helmet } from "react-helmet-async";
import {
	ColorContext,
	DataContext,
	GlobalContext,
} from "../../../context/Context";
import { shuffleColors } from "../../../helpers/shuffleColors";
import Block from "../../Blocks/Block";
import formatBlockData from "../../Blocks/helpers/formatBlockData";
import getParam from "./helpers/getParam";
import Next from "./Parts/Next";

export const ProjectContext = createContext();

function SingleProject({ location }) {
	const [project, setProject] = useState({
		blocks: [],
	});

	const { setCurrentColor } = useContext(ColorContext);
	const { setLoading, setError } = useContext(GlobalContext);
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
		accentColor && setCurrentColor(accentColor);
	}, [accentColor]);

	const [{ data, error, loading }, executeRequest] = useAxios(
		`${process.env.REACT_APP_API_URL}/projects/${projectId}?populate=deep,10`,
		{ manual: true }
	);

	useEffect(() => {
		if (data && !loading && !project.blocks[0]) {
			const blocks = formatBlockData(data.data.attributes.Choose);

			blocks.forEach(block => {
				block.then(blockInfo => {
					if (blockInfo) {
						setProject(prev => ({
							styles: {
								color: accentColor,
							},
							title: data.data.attributes.Title,
							subtitle: data.data.attributes.Subtitle,
							featureImage: {
								src: {
									lowRes:
										data.data.attributes.FeatureImage.data.attributes.formats
											.thumbnail.url,
									highRes:
										data.data.attributes.FeatureImage.data.attributes.formats
											.large.url,
								},
								alt: data.data.attributes.FeatureImage.data.attributes
									.alternativeText,
								caption:
									data.data.attributes.FeatureImage.data.attributes.caption,
								width: data.data.attributes.FeatureImage.data.attributes.width,
								height:
									data.data.attributes.FeatureImage.data.attributes.height,
							},
							blocks: [
								...prev.blocks,
								{ name: blockInfo.name, data: { ...blockInfo.data } },
							],
						}));
					}
				});
			});

			setLoading(false);
		}

		return () => {
			setLoading(true);
		};
	}, [data, loading, error]);

	useEffect(() => {
		if (projectId && !data) {
			executeRequest();
		}
	}, [projectId]);

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
						image: { ...project.featureImage },
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
