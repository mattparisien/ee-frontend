import React from "react";
import styled from "styled-components";

const StyledLoadingScreen = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100vh;
	z-index: 99999;
	background-color: ${({ theme }) => theme.colors.dark};
	color: ${({ theme }) => theme.colors.light};
	display: ${({ isActive }) => (isActive ? "flex" : "none")};
	align-items: center;
	justify-content: center;
	font-size: 5rem;
`;

function LoadingScreen({ isActive }) {
	return (
		<StyledLoadingScreen isActive={isActive}>Loading...</StyledLoadingScreen>
	);
}

export default LoadingScreen;
