import React from "react";
import { StyledUnorderedList } from "./styles";

function UnorderedList(props) {
	const styles = {
		textAlign: props.textAlign,
	};

	return (
		<StyledUnorderedList
			className='link-list'
			baseFontSize={props.baseFontSize}
			textAlign={props.textAlign}
			stacked={props.stacked}
			side={props.side}
			justifyCenter={props.justifyCenter}
			alignCenter={props.alignCenter}
		>
			{props.children}
		</StyledUnorderedList>
	);
}

export default UnorderedList;
