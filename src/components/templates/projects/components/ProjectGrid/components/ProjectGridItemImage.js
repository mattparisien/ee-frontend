import React, { useEffect, useState } from "react";
import detectTouchDevice from "../../../../../../helpers/detectTouchDevice";
import ConditionalWrapper from "../../../../../Containers/ConditionalWrapper";
import HoverFrame from "../../../../../HOC/HoverFrame";
import MyImage from "../../../../../Media/MyImage";

function ProjectGridItemImage({ image, ratio, gridNumber }) {
	return (
		<FrameWrapper gridNumber={gridNumber}>
			<MyImage
				src={image.url}
				alt={image.alternativeText}
				objectFit='cover'
				width={"100%"}
				height='100%'
				layout='fill'
			/>
		</FrameWrapper>
	);
}

export default ProjectGridItemImage;

function FrameWrapper({ children, gridNumber }) {
	const [isTouch, setIsTouch] = useState(false);

	useEffect(() => {
		const isTouch = detectTouchDevice();
		setIsTouch(isTouch);
	}, []);

	const dimensionsDesktop = {
		1: "md:w-[40vw] md:h-[27vw] md:max-w-[500px] max-h-[350px]",
		2: "md:w-[30vw] md:h-[37vw] md:max-w-[400px] max-h-[500px]",
		3: "md:w-[40vw] md:h-[27vw] md:max-w-[500px] max-h-[350px]",
		4: "md:w-[45vw] md:h-[55vw] md:max-w-[600px] max-h-[700px]",
		5: "md:w-[30vw] md:h-[10vw]",
	};

	const dimensionsMobile = "w-[90.9vw] h-[50vw]";

	return (
		<ConditionalWrapper
			condition={!isTouch}
			wrapper={children => (
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
					{children}
				</HoverFrame>
			)}
		>
			{children}
		</ConditionalWrapper>
	);
}
