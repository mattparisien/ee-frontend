import React from "react";
import Image from "../../../../Media/Image";

function ProjectGridItemImage({ height }) {
	return (
		<div className={`ProjectGridItemImage w-full h-[${height}]`}>
			<Image
				cover
				lowResSrc={
					"https://images.pexels.com/photos/11932917/pexels-photo-11932917.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
				}
				highResSrc={
					"https://images.pexels.com/photos/11932917/pexels-photo-11932917.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
				}
				alt={"hi"}
				useIO={false}
			/>
		</div>
	);
}

export default ProjectGridItemImage;
