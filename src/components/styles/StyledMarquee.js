import styled from "styled-components";

const StyledMarquee = styled.div`
	width: auto;
	position: absolute;
	left: 50%;
	transform: translateX(-50%);
	display: flex;

	.marquee-inner-relative {
		position: relative;
		width: 100%;
		height: 100%;
	}
	.marquee-title {
		position: absolute;
		min-width: 50vw;
		display: flex;
		align-items: center;
		justify-content: center;
		color: white;
	}

	.marquee-item {
		margin-right: 5rem;

	}
`;

export default StyledMarquee;
