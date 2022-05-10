import React, { useState, useEffect, useContext } from "react";
import useAxios from "axios-hooks";
import formatBlockData from "../../Blocks/helpers/formatBlockData";
import Block from "../../Blocks/Block";
import { GlobalContext } from "../../../context/Context";

function About({ pageId }) {
	const [blocks, setBlocks] = useState([]);
	const [{ data, error, loading }, executeRequest] = useAxios(
		`${process.env.REACT_APP_API_URL}/pages/${pageId}?populate=deep,10`,
		{ manual: true }
	);

	const { setLoading } = useContext(GlobalContext);

	useEffect(() => {
		if (data && !loading && !blocks[0]) {
			const blocks = formatBlockData(data.data.attributes.Choose);

			blocks.then(res => {
				res.forEach(block => {
					block.then(blockInfo => {
						if (blockInfo) {
							setBlocks(prev => [
								...prev,
								{ name: blockInfo.name, data: { ...blockInfo.data } },
							]);
						}
					});
				});
				setLoading(false);
			});
		}

		return () => setLoading(true);
	}, [data, error, loading]);

	useEffect(() => {
		if (pageId) {
			executeRequest();
		}
	}, [pageId]);

	return (
		blocks &&
		blocks.map((block, i) => <Block name={block.name} data={block.data} />)
	);
}

export default About;
