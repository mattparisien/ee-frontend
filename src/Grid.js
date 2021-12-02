import React, { useState, useEffect, useRef } from "react";
import useAxios from "./helpers/hooks/useAxios";
import gsap from "gsap";
import { useInView } from "react-intersection-observer";
import SplitText from "gsap/SplitText";

function Grid() {
	const { data, error, loading } = useAxios(
		"http://localhost:1337/api/grid-items?fields=*&populate=*"
	);

	const { ref, inView, entry } = useInView({ threshold: 0.8 });

	const paragraphRefs = useRef([]);

	return (
		<div className='grid how-grid'>
			{data &&
				data.data.map((gridItem, index) => {
					return (
						<div className={`how-grid__${index + 1} grid-col`} key={index}>
							<div className='heading-wrapper'>
								<h3 className='-heading-medium -fw-200' ref={ref}>
									{gridItem.attributes.gridEntry.Heading}
								</h3>
							</div>
							<div
								className='paragraph-wrapper -fade-up'
								ref={el =>
									(paragraphRefs.current = [...paragraphRefs.current, el])
								}
							>
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
