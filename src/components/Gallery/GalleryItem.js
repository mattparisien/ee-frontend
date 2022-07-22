import React from "react";
import MyImage from "../Media/MyImage";
import ConditionalWrapper from "../Containers/ConditionalWrapper";

import { Fade } from "react-reveal";

function GalleryItem({ image, isMobile }) {
	const aspect = React.useMemo(() => {
		const aspect = image.height / image.width;
		return Math.ceil(aspect * 100);
	}, [image]);

	return (
		<ConditionalWrapper
			condition={isMobile}
			wrapper={children => <Fade bottom>{children}</Fade>}
		>
			<div
				className={`GalleryItem relative break-inside-avoid mb-5`}
				style={{ paddingTop: `${aspect}%` }}
			>
				<div className='GalleryItem_Media w-full h-full absolute top-0 left-0'>
					<MyImage
						width='100%'
						height='100%'
						objectFit={"cover"}
						src={image.url}
						alt={image.alt}
						layout='fill'
						cloudinaryId={image.cloudinaryId}
					/>
				</div>
			</div>
		</ConditionalWrapper>
	);
}

export default GalleryItem;
