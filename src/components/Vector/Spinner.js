import React from "react";
import { TailSpin } from "svg-loaders-react";
import { StyledLoader } from "./styles";

function Spinner() {
	return (
		<StyledLoader>
			<TailSpin className='spinner' />
		</StyledLoader>
	);
}

export default Spinner;
