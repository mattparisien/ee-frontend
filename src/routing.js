import React from "react";
import {
	BrowserRouter as Router,
	Routes,
	Route,
	useLocation,
} from "react-router-dom";

function Routes() {
	return (
		<>
			<Routes location={location} key={location.pathname}>
				<Route
					path='/'
					element={<Home hoverState={state.isHovering} addToRefs={addToRefs} />}
				/>
				<Route path='/contact' element={<Contact />} />
				<Route
					path='/projects'
					element={<Projects updateHoverState={updateHoverState} />}
					key={location.pathname}
				/>
				<Route path='/projects/:id' element={<ProjectItem />} />
			</Routes>
		</>
	);
}

export default routing;
