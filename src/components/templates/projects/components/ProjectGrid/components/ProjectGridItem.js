import Link from "next/link";
import React from "react";
import convertToSlug from "../../../../../../helpers/convertToSlug";
import ProjectGridItemImage from "./ProjectGridItemImage";
import ProjectGridItemInfo from "./ProjectGridItemInfo";

export const ItemContext = React.createContext();

function ProjectGridItem({
	gridNumber,
	Title,
	Subtitle,
	FeatureImage,
	imageRatio,
}) {
	const dimensionsDesktop = {
		1: "md:w-[33vw] md:h-[23vw] md:max-w-[500px] max-h-[350px]",
		2: "md:w-[26vw] md:h-[33vw] md:max-w-[400px] max-h-[500px]",
		3: "md:w-[33vw] md:h-[23vw] md:max-w-[500px] max-h-[350px]",
		4: "md:w-[40vw] md:h-[50vw] md:max-w-[600px] max-h-[700px]",
		5: "md:w-[30vw] md:h-[10vw]",
	};

	const dimensionsMobile = "w-[90.9vw] h-[50vw]";

	return (
		<ItemContext.Provider value={{ dimensionsDesktop, dimensionsMobile }}>
			<div
				className={`ProjectGridItem ProjectGridItem_${gridNumber} ${
					gridNumber % 2 === 0 ? "md:ml-auto" : ""
				} flex flex-col h-full pointer-cursor ${dimensionsDesktop[gridNumber]}`}
			>
				<Link
					href={"/projects/[slug]"}
					as={`/projects/${convertToSlug(Subtitle)}`}
				>
					<a>
						<div className='link-inner w-full h-full'>
							<ProjectGridItemImage
								gridNumber={gridNumber}
								image={{ ...FeatureImage.data.attributes }}
								ratio={imageRatio}
							/>
							<ProjectGridItemInfo title={Title} subtitle={Subtitle} />
						</div>
					</a>
				</Link>
			</div>
		</ItemContext.Provider>
	);
}

export default ProjectGridItem;
