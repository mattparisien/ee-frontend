import React from "react";
import Heading from "../Heading/Heading";
import SplitText from "../HOC/SplitText";

function TitleBlock({ data }) {
	return !data.Title.includes("-") ? (
		<Heading level={1} wrapperClasses={"text-center"}>
			<SplitText>{data.Title}</SplitText>
		</Heading>
	) : (
		<>
			<Heading level={1} wrapperClasses={"text-center"}>
				<SplitText>{data.Title.split("-")[0]}</SplitText>
			</Heading>
			<Heading level={3} wrapperClasses={"text-center mt-2 md:mt-5"}>
				<SplitText>{data.Title.split("-")[1]}</SplitText>
			</Heading>
		</>
	);
}

export default TitleBlock;
