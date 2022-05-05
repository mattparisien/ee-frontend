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
				<Left text={data && data.text} cta={data && data.callToAction} />
			}
			rightComponent={data.media ? <Right media={data.media} /> : null}
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
					p: "body2",
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
	return (
		<Media
			useIO
			aspect='landscape'
			boxHeight='auto'
			items={media && media.items}
			disableContainer
			options={
				media && {
					...media.options,
				}
			}
			permalink={media && media.permalink}
		/>
	);
}

export default SplitTextMediaBlock;
