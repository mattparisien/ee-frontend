import styled from "styled-components";

const StyledMarquee = styled.div`
	width: 100vw;
	height: 700px;
	position: absolute;
	left: 0;

	.marquee-inner-relative {
		position: relative;
		width: 100%;
		height: 100%;
	}
	.marquee-title {
		position: absolute;
	}

	.marquee-title:first-of-type {
		left:  -${({ $boxWidth }) => $boxWidth && $boxWidth}px;
		background-color: red;
	}

	.marquee-title:nth-of-type(2) {
		left: 0;
		background-color: orange;
	}

	.marquee-title:nth-of-type(3) {
		left: ${({ $boxWidth }) => $boxWidth && $boxWidth}px;
		background-color: blue;
	}
`;

export default StyledMarquee;
