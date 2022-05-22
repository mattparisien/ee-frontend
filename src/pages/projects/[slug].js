import React from "react";
import SinglePage from "../../components/templates/projects/single/SinglePage";
import { getProjects } from "../../lib/getProjects";
import { getSingle } from "../../lib/getSingle";
import Seo from "../../components/Seo/Seo";

const Single = props => {
	return (
		<>
			<Seo {...props.seo} />
			<SinglePage {...props} />
		</>
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

	console.log("single", single);

	return {
		props: {
			...single,
		},
	};
};
