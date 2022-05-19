import React from "react";
import MyImage from "../../../../../Media/MyImage";
import HoverFrame from "../../../../../HOC/HoverFrame";

function ProjectGridItemImage({ image, ratio, gridNumber }) {
	const dimensionsDesktop = {
		1: "md:w-[40vw] md:h-[27vw] md:max-w-[500px] max-h-[350px]",
		2: "md:w-[30vw] md:h-[37vw] md:max-w-[400px] max-h-[500px]",
		3: "md:w-[40vw] md:h-[27vw] md:max-w-[500px] max-h-[350px]",
		4: "md:w-[45vw] md:h-[55vw] md:max-w-[600px] max-h-[700px]",
		5: "md:w-[30vw] md:h-[10vw]",
	};

	const dimensionsMobile = "w-[90.9vw] h-[50vw]";

	return (
		<HoverFrame
			wrapper={(children, ref) => (
				<div
					className={`ProjectGridItemImage relative ${dimensionsMobile} ${dimensionsDesktop[gridNumber]}`}
					ref={ref}
				>
					{children}
				</div>
			)}
		>
			<MyImage
				src={image.url}
				alt={image.alternativeText}
				objectFit='cover'
				width={"100%"}
				height='100%'
				layout='fill'
			/>
		</HoverFrame>
	);
}

export default ProjectGridItemImage;
