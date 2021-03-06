import React, { useState } from "react";
import Seo from "../../components/Seo/Seo";
import SinglePage from "../../components/templates/projects/single/SinglePage";
import { getProjects } from "../../lib/getProjects";
import { getSingle } from "../../lib/getSingle";

export const SingleContext = React.createContext();

const Single = props => {
	const [themeColor, setThemeColor] = useState("yellow");
	
	return (
		<SingleContext.Provider value={{ projects: props.projects, themeColor }}>
			<Seo {...props.seo} />
			<SinglePage {...props} />
		</SingleContext.Provider>
	);
};

export default Single;

export const getStaticPaths = async () => {
	const projects = await getProjects();
	const data = projects.projects[0];

	const paths = data.map(project => {
		return {
			params: {
				slug: project.Subtitle.toLowerCase().split(" ").join("-"),
			},
		};
	});

	return {
		paths,
		fallback: false,
	};
};

export const getStaticProps = async context => {
	const slug = context.params.slug;

	const single = await getSingle(slug);
	const list = await getProjects();

	return {
		props: {
			...single,
			projects: [...list.projects[0]],
		},
	};
};
