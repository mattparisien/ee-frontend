import { useQuery } from "@apollo/client";
import React, { useEffect, useState, useContext } from "react";
import PAGE from "../../api/graphql/queries/GetPage";
import Block from "../Blocks/Block";
import formatBlockData from "../Blocks/helpers/formatBlockData";
import Template from "../Templates/Template";
import Page from "./Page";
import { LoadingContext } from "../../context/Context";

function View({ location, pageId }) {
	const { loading, error, data } = useQuery(PAGE, {
		variables: {
			id: pageId,
		},
	});

	const [page, setPage] = useState({
		id: null,
		name: null,
		template: null,
		blocks: null,
	});

	const { setLoading } = useContext(LoadingContext);

	useEffect(() => {
		if (data && !loading) {
			setPage(() => ({
				id: pageId,
				name: data.page.data.attributes.Name,
				template: data.page.data.attributes.template,
				blocks:
					data.page.data.attributes.Choose.length >= 1 &&
					formatBlockData(data.page.data.attributes.Choose),
			}));

			setLoading(false);
		}
	}, [loading, data, error]);

	return (
		<Page location={location}>
			<Template
				name={
					page.template &&
					page.template.data &&
					page.template.data.attributes.Name
				}
			/>
			{page &&
				page.blocks &&
				page.blocks.map((block, i) => <Block {...block} key={i} />)}
		</Page>
	);
}

export default View;
