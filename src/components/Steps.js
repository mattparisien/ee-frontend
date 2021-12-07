import React from "react";
import Grid from "./Grid";
import GridItem from "./GridItem";
import Heading from "./Heading";
import Paragraph from "./Paragraph";
import useAxios from "../helpers/hooks/useAxios";
import { useEffect } from "react/cjs/react.development";
import { render } from "@testing-library/react";

function Steps() {
	const { data, error, loading } = useAxios("/api/steps?fields=*&populate=*");

	const renderSteps = function () {
		return (
			data &&
			data.data.slice(0, 5).map((step, index) => {
				return (
					<GridItem>
						<Heading medium>{step.attributes.Title}</Heading>
						<Paragraph small>{step.attributes.Body}</Paragraph>
					</GridItem>
				);
			})
		);
	};

	useEffect(() => {
		console.log(data);
	});

	return (
		<Grid gap={"3vw"} columns={12} rows={"grid-auto-rows: 30vw"}>
			{data && renderSteps()}
		</Grid>
	);
}

export default Steps;
