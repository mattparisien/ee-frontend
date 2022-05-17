import React from "react";
import Image from "../../../../Media/Image";

function ProjectGridItemImage({ image }) {
	return (
		<div className={`ProjectGridItemImage w-full`}>
			<Image
				cover
				lowResSrc={image.url}
				highResSrc={image.url}
				alt={image.alternativeText}
				useIO={false}
			/>
		</div>
	);
}

export default ProjectGridItemImage;
