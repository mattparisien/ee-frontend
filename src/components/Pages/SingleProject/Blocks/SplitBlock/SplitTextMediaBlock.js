import React from "react";
import Container from "../../../../Containers/ContainerFluid";
import Cta from "../../../../Link/Cta";
import Markdown from "../../../../Markdown/Markdown";
import Media from "../../../../Media/Media";
import useLayout from "../../helpers/hooks/useLayout";
import useMedia from "../../helpers/hooks/useMedia";
import SplitBlock from "./SplitBlock";

function SplitTextMediaBlock({ data }) {
	const media = useMedia(data && data.right.media);
	useLayout(data && data.layout);
	

	return (
		<SplitBlock
			leftComponent={<Left data={data} />}
			rightComponent={<Right media={media} />}
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
			aspectRatio={1}
			disableContainer
			options={media && media.options}
			permalink={media && media.permalink}
		/>
	);
}

export default SplitTextMediaBlock;
