import Link from "next/Link";
import React from "react";
import convertToSlug from "../../../../../../helpers/convertToSlug";
import ProjectGridItemImage from "./ProjectGridItemImage";
import ProjectGridItemInfo from "./ProjectGridItemInfo";

function ProjectGridItem({
	gridNumber,
	Title,
	Subtitle,
	FeatureImage,
	imageRatio,
}) {


	return (
		<div
			className={`ProjectGridItem ProjectGridItem_${gridNumber} flex flex-col h-full pointer-cursor`}
		>
			<Link href={`/projects/${convertToSlug(Subtitle)}`}>
				<div className='link-inner w-full h-full'>
					<ProjectGridItemImage
						gridNumber={gridNumber}
						image={{ ...FeatureImage.data.attributes }}
						ratio={imageRatio}
					/>
					<ProjectGridItemInfo title={Title} subtitle={Subtitle} />
				</div>
			</Link>
		</div>
	);
}

export default ProjectGridItem;