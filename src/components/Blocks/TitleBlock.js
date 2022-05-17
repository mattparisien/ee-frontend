import React from "react";
import Heading from "../Heading/Heading";
import SplitText from "../HOC/SplitText";

function TitleBlock({ data }) {
	return !data.title.includes("-") ? (
		<Heading level={1} wrapperClasses={"text-center"}>
			<SplitText>{data.title}</SplitText>
		</Heading>
	) : (
		<>
			<Heading level={1} wrapperClasses={"text-center"}>
				<SplitText>{data.title.split("-")[0]}</SplitText>
			</Heading>
			<Heading level={3} wrapperClasses={"text-center"}>
				<SplitText>{data.title.split("-")[1]}</SplitText>
			</Heading>
		</>
	);
}

export default TitleBlock;
