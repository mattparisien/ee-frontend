import React from "react";
import StyledGrid from "./styles/StyledGrid.styles";
import useResize from "../helpers/hooks/useResize";

function Grid(props) {
	const [windowWidth] = useResize();

	const gridStyles = {
		columns: props.columns,
		rows: props.rows,
		gap: props.gap,
	};

	return (
		<StyledGrid
			className='grid-container'
			$gridStyles={gridStyles}
			$windowWidth={windowWidth}
		>
			{props.children}
		</StyledGrid>
	);
}

export default Grid;
