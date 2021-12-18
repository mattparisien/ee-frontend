import React from "react";
import { Heading, Paragraph, Grid, GridItem } from "../../../index";
import useAxios from "../../../../helpers/hooks/useAxios";

function Steps() {
	const { data, error, loading } = useAxios("/api/steps?fields=*&populate=*");

	const renderSteps = function () {
		return (
			data &&
			data.slice(0, 5).map((step, index) => {
				return (
					<GridItem key={step.id} classes={`steps-grid__item${index + 1}`}>
						<Heading small>{step.attributes.Title}</Heading>
						<Paragraph xs>{step.attributes.Body}</Paragraph>
					</GridItem>
				);
			})
		);
	};

	return (
		<Grid
			gap={"3vw"}
			columns={12}
			rows={"grid-template-rows: repeat(6, 35vw)"}
			classes={"steps-grid"}
		>
			{data && renderSteps()}
		</Grid>
	);
}

export default Steps;
