import classNames from "classnames";
import Link from "next/link";
import React from "react";
import convertToSlug from "../../helpers/convertToSlug";
import useMouseEnter from "../../helpers/hooks/useMouseEnter";
import ConditionalWrapper from "../Containers/ConditionalWrapper";
import Media from "../Media/Media";
import Quote from "../Quote/Quote";
import CarouselItemOverlay from "./CarouselItemOverlay";
import CarouselText from "./CarouselText";
import { useMediaQuery } from "@mui/material";

function Carouseltem(props) {
	const itemClasses = classNames("CarouselItem relative", {
		[props.classes]: props.classes,
		[`transition-opacity ease duration-[600ms]`]: props.opacity !== null,
	});

	const { ref, isEnter } = useMouseEnter();

	const matches = useMediaQuery("(min-width: 768px)");

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
							<CarouselItemOverlay
								{...props}
								isVisible={matches ? isEnter : true}
							/>
						</a>
					</Link>
				)}
				condition={props.linkable}
			>
				{props.type !== "text" && <Media {...props} />}
				{props.type === "text" && (
					<CarouselText>
						<Quote quote={props.Quote} author={props.Author} />
					</CarouselText>
				)}
			</ConditionalWrapper>
		</div>
	);
}

export default Carouseltem;
