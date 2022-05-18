import React from "react";
import MyImage from "../../../../../Media/MyImage";

function ProjectGridItemImage({ image, ratio, gridNumber }) {
	const dimensionsDesktop = {
		1: "md:w-[40vw] md:h-[27vw]",
		2: "md:w-[30vw] md:h-[37vw]",
		3: "md:w-[40vw] md:h-[27vw]",
		4: "md:w-[45vw] md:h-[55vw]",
		5: "md:w-[30vw] md:h-[10vw]",
	};

	const dimensionsMobile = "w-[90.9vw] h-[50vw]";

	return (
		<div
			className={`ProjectGridItemImage ${dimensionsMobile} ${dimensionsDesktop[gridNumber]}`}
		>
			<MyImage
				src={image.url}
				alt={image.alternativeText}
				objectFit='cover'
				width={"100%"}
				height='100%'
				layout='fill'
				// ratio={"portrait"}
			/>
		</div>
	);
}

export default ProjectGridItemImage;
