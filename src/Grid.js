import React from "react";

function Grid() {
	return (
		<div className='grid how-grid'>
			{data &&
				data.data.map((gridItem, index) => {
					return (
						<div className={`how-grid__${index + 1} grid-col`} key={index}>
							<div className='heading-wrapper'>
								<h3 className='-heading-medium -fw-200'>
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
