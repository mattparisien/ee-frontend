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
			
			leftClasses='w-full md:w-1/2'
			rightClasses='flex items-center justify-center w-full md:w-1/2 mt-5 md:mt-0'
		/>
	);
}

function Left({ text, cta }) {
	return (
		<Container>
			<Markdown paragraphClasses={"mt-5 md:mt-4"}>{text}</Markdown>

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
	return (
		<div className="w-full">
			<Media
				url={media[0].attributes.url}
				alt={media[0].attributes.alternativeText}
				caption={media[0].attributes.caption}
				resource_type={media[0].attributes.provider_metadata.resource_type}
				aspect='landscape'
			/>
		</div>
	);
}

export default SplitTextMediaBlock;
