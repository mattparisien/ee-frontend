import React from "react";
import Carousel from "../../Carousel/Carousel";
import About from "./components/About/About";
import Hero from "./components/Hero/Hero";
import Steps from "./components/Steps/Steps";

function HomePage({ about, steps, projects }) {
	return (
		<div className='HomePage'>
			<Hero />
			<About aboutText={about && about} />
			<Steps steps={steps} />
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
			{/* <Work projects={projects} /> */}
		</div>
	);
}

export default HomePage;
