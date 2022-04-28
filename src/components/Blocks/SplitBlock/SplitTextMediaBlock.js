import React, { useEffect } from "react";
import Container from "../../Containers/ContainerFluid";
import Cta from "../../Link/Cta";
import Markdown from "../../Markdown/Markdown";
import Media from "../../Media/Media";
import useMedia from "../helpers/hooks/useMedia";
import SplitBlock from "./SplitBlock";

function SplitTextMediaBlock({ data }) {
	const media = useMedia(data && data.right.media);

	useEffect(() => {
		console.log("the data", data);
	}, [media, data]);

	return (
		<SplitBlock
			leftComponent={<Left data={data} />}
			rightComponent={media ? <Right media={media} /> : null}
			width={{
				left: "50%",
				right: "50%",
			}}
			leftStyles={{
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
			}}
		/>
	);
}

function Left({ data }) {
	return (
		<Container>
			<Markdown
				variantMap={{
					p: "body2",
				}}
			>
				{data && data.left.text}
			</Markdown>

			{data.left.cta && (
				<Cta
					children={data.left.cta.ButtonText}
					target={data.left.cta.OpenNewTab ? "_blank" : "_self"}
					href={data.left.cta.URL}
				/>
			)}
		</Container>
	);
}

function Right({ media }) {
	return (
		<Media
			items={media && media}
			disableContainer
			options={
				media && {
					...media.options,
					width: {
						desktop: "50vw",
						mobile: "100vw",
					},
					maxWidth: {
						desktop: "600px",
						mobile: "100vw",
					},
				}
			}
			permalink={media && media.permalink}
		/>
	);
}

export default SplitTextMediaBlock;
