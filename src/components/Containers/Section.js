import { useState, useEffect, useContext } from "react";
import { StyledSection } from "./StyledSection";
import classNames from "classnames";
import { InView } from "react-intersection-observer";
import { SiteWideControls } from "./Temp/Authenticated";
import SectionBackground from "./SectionBackground";

export default function Section(props) {
	const { bg, addToRefs, isRelative, height, id, page } = props;
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
		<StyledSection
			isFullHeight={props.isFullHeight}
			className={sectionClass}
			$bg={bg}
			ref={addToRefs}
			
			data-scroll-section
			
			height={height}
		>
			<InView
				className='section-view-wrapper'
				as='div'
				style={{height: "100%"}}
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
			{/* <SectionBackground bg={bg}/> */}
		</StyledSection>
	);
}
