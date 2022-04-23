import { useQuery } from "@apollo/client";
import React, { useEffect, useState } from "react";
import PAGE from "../../api/graphql/queries/GetPage";
import formatBlockData from "../Blocks/helpers/formatBlockData";
import Page from "./Page";
import Block from "../Blocks/Block";

function View({ location, inner, pageId }) {
	const { loading, error, data } = useQuery(PAGE, {
		variables: {
			id: pageId,
		},
	});

	const [page, setPage] = useState(null);

	useEffect(() => {
		if (data && !loading) {
			if (data.page.data.attributes.Choose.length >= 1) {
				setPage(() => ({
					id: pageId,
					name: data.page.data.attributes.Name,
					blocks: formatBlockData(data.page.data.attributes.Choose),
				}));
			}
		}
	}, [loading, data, error]);

	return (
		<Page location={location}>
			{page &&
				page.blocks &&
				page.blocks.map((block, i) => <Block {...block} key={i} />)}
		</Page>
	);
}

export default View;
