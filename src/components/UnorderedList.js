import React from "react";
import { StyledUnorderedList } from "./styles/UnorderedList.styled";

function UnorderedList(props) {

  const styles = {
    textAlign: props.textAlign,
  }

	return (
		<StyledUnorderedList className='link-list' $styles={styles}>
			{props.children}
		</StyledUnorderedList>
	);
}

export default UnorderedList;
