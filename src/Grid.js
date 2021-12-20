import React, { useState, useEffect, useRef, useCallback } from "react";
import gsap from "gsap";
import { useInView } from "react-intersection-observer";
import SplitText from "gsap/SplitText";
import useResize from "./helpers/hooks/useResize";

function Grid() {
	// const { data, error, loading } = useAxios(
	// 	"/api/grid-items?fields=*&populate=*"
	// );

	const { ref, inView, entry } = useInView({ threshold: 0.8 });

	const paragraph = useRef([]);
	const fadeUpRows = useRef(gsap.timeline());
	const [lines, setLines] = useState([]);
	const { size } = useResize();

	



	return (
		<div className='grid how-grid'>
			{data &&
				data.data.map((gridItem, index) => {
					return (
						<div className={`how-grid__${index + 1} grid-col`} key={index}>
							<div className='heading-wrapper'>
								<h3 className='-heading-medium -fw-200' >
									{gridItem.attributes.gridEntry.Heading}
								</h3>
							</div>
							<div className='paragraph-wrapper -fade-up'>
								<p>{gridItem.attributes.gridEntry.Body}</p>
							</div>
						</div>
					);
				})}
			{loading && "Loading..."}
			{error && "There has been an error"}
		</div>
	);
}

export default Grid;
