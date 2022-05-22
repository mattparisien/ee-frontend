import Link from "next/link";
import React from "react";
import convertToSlug from "../../helpers/convertToSlug";
import ConditionalWrapper from "../Containers/ConditionalWrapper";
import Media from "../Media/Media";
import classNames from "classnames";

function Carouseltem(props) {
	const itemClasses = classNames("CarouselItem", {
		[props.classes]: props.classes,
	});

	return (
		<div className={itemClasses}>
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
