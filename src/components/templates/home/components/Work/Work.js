import React, { useEffect } from "react";
import Carousel from "../../../../Carousel/Carousel";
import Cta from "../../../../Link/Cta";
import Heading from "../../../../Heading/Heading";

function Work({ projects }) {
	return (
		<div className='Work'>
			<Heading level={2} wrapperClasses='text-center mb-10'>
				Our Work
			</Heading>
			<Carousel
				items={projects.map(project => ({
					itemClasses: "mx-2",
					aspect: "portrait",
					grayscale: true,
					url: project.FeatureImage.data.attributes.url,
					alt: project.FeatureImage.data.attributes.alternativeText,
					Subtitle: project.Subtitle,
					Title: project.Title,
					resource_type:
						project.FeatureImage.data.attributes.provider_metadata
							.resource_type,
				}))}
				slidesPerView={3}
				linkable
				wrapperClasses={"-ml-2 -mr-2"}
			/>

			<div className='mx-auto mb-10 mt-20 flex justify-center'>
				<Cta href={"/projects"}>View all work</Cta>
			</div>
		</div>
	);
}

export default Work;
