import React from "react";
import { Paragraph } from "..";
import styled from "styled-components";

const StyledParagraphLayout = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

function ParagraphLayout(props) {
	return (
		<StyledParagraphLayout className='ParagraphLayout'>
			<Paragraph {...props}>{props.children}</Paragraph>
		</StyledParagraphLayout>
	);
}

export default ParagraphLayout;
