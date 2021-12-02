import React, { useEffect } from "react";
import useAxios from "./helpers/hooks/useAxios";

function Grid() {
	const { data, error, loading } = useAxios(
		"http://localhost:1337/api/grid-items?fields=*&populate=*"
	);

	return (
		<div className='grid how-grid'>
			{data &&
				data.map((gridItem, index) => {
					return (
						<div
							className={`how-grid__${index.toString()} grid-col`}
							key={index}
						>
							<div className='heading-wrapper'>
								<h3 className='-heading-medium -fw-200'>
									{gridItem.attributes.gridEntry.Heading}
								</h3>
							</div>
							<div className="paragraph-wrapper">
								<p>{gridItem.attributes.gridEntry.Body}</p>
							</div>
						</div>
					);
				})}
				{loading && "Loading..."}
				{error && "There has been an error"}

			{/* <div className='how-grid__one grid-col '>
				<div className='heading-wrapper'>
					<h3 className='-heading-medium -fw-200'>
            <div className="word">We</div>
            <div className="word">do this</div>
          </h3>
				</div>
				<div className='paragraph-wrapper'>
					<p>
						Maybe you already have a draft in hand. Or you need to refresh
						something that’s been out a while. Either way, we can find places to
						tighten and flow.
					</p>
				</div>
			</div>
			<div className='how-grid__two grid-col '>
				<div className='heading-wrapper'>
					<h3 className='-heading-medium -fw-200'>
            <div className="word">We</div>
            <div className="word">do this</div>
          </h3>
				</div>
				<div className='paragraph-wrapper'>
					<p>
						Maybe you already have a draft in hand. Or you need to refresh
						something that’s been out a while. Either way, we can find places to
						tighten and flow.
					</p>
				</div>
			</div>
			<div className='how-grid__three grid-col '>
				<div className='heading-wrapper'>
					<h3 className='-heading-medium -fw-200'>
            <div className="word">We</div>
            <div className="word">do this</div>
          </h3>
				</div>
				<div className='paragraph-wrapper '>
					<p>
						Maybe you already have a draft in hand. Or you need to refresh
						something that’s been out a while. Either way, we can find places to
						tighten and flow.
					</p>
				</div>
			</div>
			<div className='how-grid__four grid-col '>
				<div className='heading-wrapper'>
					<h3 className='-heading-medium -fw-200'>
            <div className="word">We</div>
            <div className="word">do this</div>
          </h3>
				</div>
				<div className='paragraph-wrapper'>
					<p>
						Maybe you already have a draft in hand. Or you need to refresh
						something that’s been out a while. Either way, we can find places to
						tighten and flow.
					</p>
				</div>
			</div>
			<div className='how-grid__five grid-col '>
				<div className='heading-wrapper'>
					<h3 className='-heading-medium -fw-200'>
            <div className="word">
              We
            </div>
            <div className="word">
              do this
            </div>
          </h3>
				</div>
				<div className='paragraph-wrapper'>
					<p>
						Maybe you already have a draft in hand. Or you need to refresh
						something that’s been out a while. Either way, we can find places to
						tighten and flow.
					</p>
				</div>
			</div> */}
		</div>
	);
}

export default Grid;
