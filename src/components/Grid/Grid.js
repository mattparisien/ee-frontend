import React from "react";
import StyledGrid from "./styles";
import useResize from "../../helpers/hooks/useResize";
import classNames from "classnames";

function Grid(props) {
	const gridClass = classNames("grid-container", props.classes);
	const [windowWidth] = useResize();

	const gridStyles = {
		columns: props.columns,
		rows: props.rows,
		gap: props.gap,
	};

	return (
		<StyledGrid
			name={props.name}
			className={gridClass}
			$gridStyles={gridStyles}
			$windowWidth={windowWidth}
		>
			{props.children}
		</StyledGrid>
	);
}

export default Grid;
