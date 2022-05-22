import React from "react";
import Carousel from "../../../../Carousel/Carousel";
import Cta from "../../../../Link/Cta";

function Work({ projects }) {
	return (
		<div className='Work'>
			<Carousel
				items={projects.map(project => ({
					itemClasses: "mx-2",
					aspect: "portrait",
					url: project.FeatureImage.data.attributes.url,
					alt: project.FeatureImage.data.attributes.alternativeText,
					resource_type:
						project.FeatureImage.data.attributes.provider_metadata
							.resource_type,
				}))}
				slidesPerView={3}
				linkable={false}
				wrapperClasses={"-ml-2 -mr-2"}
			/>

			<div className="mx-auto mt-10 flex justify-center">
				<Cta href={"/projects"}>View all work</Cta>
			</div>
		</div>
	);
}

export default Work;
