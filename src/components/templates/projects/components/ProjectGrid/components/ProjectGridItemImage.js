import React, { useEffect, useState, useContext } from "react";
import { ItemContext } from "./ProjectGridItem";
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
	const { dimensionsDesktop, dimensionsMobile } = useContext(ItemContext);

	const [isTouch, setIsTouch] = useState(false);

	useEffect(() => {
		const isTouch = detectTouchDevice();
		setIsTouch(isTouch);
	}, []);

	return (
		<ConditionalWrapper
			condition={!isTouch}
			wrapper={children => (
				<HoverFrame
					wrapper={(children, ref) => (
						<div
							className={`ProjectGridItemImage relative  ${dimensionsMobile} ${dimensionsDesktop[gridNumber]}`}
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
