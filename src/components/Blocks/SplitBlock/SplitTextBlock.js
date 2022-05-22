import React from "react";
import Cta from "../../Link/Cta";
import Markdown from "../../Markdown/Markdown";
import SplitBlock from "./SplitBlock";

function SplitTextBlock({ data }) {

	return (
		<SplitBlock
			rightClasses="md:ml-12"
			leftComponent={<Left text={data.TextLeft} cta={data.cta} />}
			rightComponent={<Right text={data.TextRight} />}
		/>
	);
}

function Left({ text, cta }) {
	return (
		<>
			<Markdown
				paragraphClasses={"mt-5"}
			>
				{text}
			</Markdown>
			{cta && (
				<Cta
					children={cta.ButtonText}
					target={cta.OpenNewTab ? "_blank" : "_self"}
					href={cta.URL}
				/>
			)}
		</>
	);
}
function Right({ text }) {
	return (
		<Markdown
			paragraphClasses={"mt-5"}
			headingClasses="mt-5 md:mt-0"
		>
			{text}
		</Markdown>
	);
}

export default SplitTextBlock;
