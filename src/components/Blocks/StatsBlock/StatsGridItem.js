import React from "react";
import Heading from "../../Heading/Heading";
import Paragraph from "../../Paragraph/Paragraph";
import { Fade } from "react-reveal";

function StatsGridItem({ heading, description, index }) {
	return (
		<Fade bottom>
			<div
				className={`StatsGridItem  ${index !== 0 ? "md:ml-5 mt-7 md:mt-0" : ""}`}
			>
				<Heading level={3} wrapperClasses='w-full text-center'>
					{heading}
				</Heading>
				<Paragraph size='small' textCenter>
					{description}
				</Paragraph>
			</div>
		</Fade>
	);
}

export default StatsGridItem;
