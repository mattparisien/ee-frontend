import { Typography } from "@mui/material";
import gsap from "gsap";
import DrawSVGPlugin from "gsap/dist/DrawSVGPlugin";
import { useContext, useEffect, useMemo } from "react";
import { DataContext, SearchContext } from "../../../context/Context";
import Container from "../../Containers/ContainerFluid";
import Section from "../../Containers/Section";
import ColorBlobs from "../../Drawings/ColorBlobs";
import ProjectGrid2 from "./ProjectGrid/ProjectGrid2";
import variables from "../../../styles/scss/_vars.module.scss";
import { useQuery, gql } from "@apollo/client";

const PROJECTS = gql`
	query GetProjects {
		projects {
			data {
				attributes {
					Title
				}
			}
		}
	}
`;

export default function ProjectPage({ pageHeading }) {
	const { loading, error, data } = useQuery(PROJECTS);

	gsap.registerPlugin(DrawSVGPlugin);
	// const data = useContext(DataContext);
	const { search } = useContext(SearchContext);

	const colors = useMemo(() => {
		const colorArray = [];

		if (variables) {
			for (let key in variables) {
				if (key.includes("colors")) {
					colorArray.push(variables[key]);
				}
			}
		}

		return [...colorArray, ...colorArray].slice(0, 6);
	}, [variables]);

	return (
		<div className="-fullHeight -flex -align-center -justify-center">
			{loading && <Typography>Loading...</Typography>}
			{error && <Typography>There has been an error</Typography>}
		</div>
	);
}
