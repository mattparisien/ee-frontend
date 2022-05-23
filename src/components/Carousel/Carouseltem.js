import classNames from "classnames";
import Link from "next/link";
import React from "react";
import convertToSlug from "../../helpers/convertToSlug";
import ConditionalWrapper from "../Containers/ConditionalWrapper";
import Media from "../Media/Media";
import CarouselItemOverlay from "./CarouselItemOverlay";
import useMouseEnter from "../../helpers/hooks/useMouseEnter";
import { Fade } from "react-reveal";

function Carouseltem(props) {
	const itemClasses = classNames("CarouselItem relative", {
		[props.classes]: props.classes,
		[`transition-opacity ease duration-[600ms]`]: props.opacity !== null,
	});

	const { ref, isEnter } = useMouseEnter();

	return (
		<div
			className={itemClasses}
			ref={self => {
				ref.current = self;
			}}
		>
			<ConditionalWrapper
				wrapper={children => (
					<Link href={`/projects/${convertToSlug(props.Subtitle)}`}>
						<a href={`/projects/${convertToSlug(props.Subtitle)}`}>
							{children}
							<CarouselItemOverlay {...props} isVisible={isEnter} />
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
