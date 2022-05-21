import Link from "next/link";
import React from "react";
import convertToSlug from "../../helpers/convertToSlug";
import ConditionalWrapper from "../Containers/ConditionalWrapper";
import Media from "../Media/Media";

function Carouseltem(props) {
	return (
		<div className='CarouselItem'>
			<ConditionalWrapper
				wrapper={children => (
					<Link href={`/projects/${convertToSlug(props.Subtitle)}`}>
						<a href={`/projects/${convertToSlug(props.Subtitle)}`}>
							{children}
						</a>
					</Link>
				)}
				condition={props.linkable}
			>
				<Media {...props} />
			</ConditionalWrapper>
		</div>
	);
}

export default Carouseltem;
