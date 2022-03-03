import classNames from "classnames";
import { useContext, useEffect, useState } from "react";
import { InView } from "react-intersection-observer";
import { SiteWideControls } from "./Temp/Authenticated";

export default function Section(props) {
	const { bg, addToRefs, height, id, page, minHeight, headerOffset } = props;
	const sectionClass = classNames(
		`Section section-${page} section-${page}__${id}`,
		props.classes
	);

	//Detect when section intersects with header
	const [intersectingTarget, setIntersectingTarget] = useState(null);
	const { toggleHeaderColor } = useContext(SiteWideControls);

	useEffect(() => {
		intersectingTarget && toggleHeaderColor(bg);
	}, [intersectingTarget]);

	return (
		<section className='Section'>
			<InView
				className='section-view-wrapper'
				as='div'
				style={{ height: "100%" }}
				onChange={(inView, entry) =>
					inView &&
					setIntersectingTarget({
						id: id,
						target: entry.target,
						page: page,
					})
				}
				threshold={0}
				rootMargin={"-50px 0px -95%"}
			>
				{props.children}
			</InView>
		</section>
	);
}
