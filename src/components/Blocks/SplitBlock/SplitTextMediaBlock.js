import React from "react";
import Container from "../../Containers/ContainerFluid";
import Cta from "../../Link/Cta";
import Markdown from "../../Markdown/Markdown";
import Media from "../../Media/Media";
import SplitBlock from "./SplitBlock";

function SplitTextMediaBlock({ data }) {
	return (
		<SplitBlock
			leftComponent={
				<Left text={data && data.Text} cta={data && data.CallToAction} />
			}
			rightComponent={
				data.MediaItem ? (
					<Right media={data.MediaItem.MediaUpload.Media.data} />
				) : null
			}
			width={{
				left: "50%",
				right: "50%",
			}}
			leftStyles={{
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
			}}
			rightStyles={{
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
			}}
		/>
	);
}

function Left({ text, cta }) {
	return (
		<Container>
			<Markdown
				variantMap={{
					p: "small",
				}}
			>
				{text}
			</Markdown>

			{cta && (
				<Cta
					children={cta.buttonText}
					target={cta.openNewTab ? "_blank" : "_self"}
					href={cta.url}
				/>
			)}
		</Container>
	);
}

function Right({ media }) {
	console.log(media, )
	return (
		<Media
			url={media[0].attributes.url}
			alt={media[0].attributes.alternativeText}
			caption={media[0].attributes.caption}
			resource_type={media[0].attributes.provider_metadata.resource_type}
		/>
	);
}

export default SplitTextMediaBlock;
