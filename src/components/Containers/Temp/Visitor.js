// import React from "react";
// import { Route, Routes } from "react-router-dom";
// import styled from "styled-components";
// import useAppData from "../../../helpers/hooks/useAppData";
// import NotFound from "../../404/NotFound";
// import { device } from "../../styles/device";
// import { TextLogo } from "../../Vector/Svg";
// import ComingSoon from "./Visitor/ComingSoon";
// import Entry from "./Visitor/Entry";

// const StyledVisitorPage = styled.div`
// 	background-color: ${({ theme }) => theme.colors.light};
// 	color: ${({ theme }) => theme.colors.dark};
// 	width: 100%;
// 	height: 100vh;
// 	font-family: "Kobe";
// 	font-size: 15vw;
// 	letter-spacing: -0.6vw;
// 	position: relative;
	

// 	.entry-heading {
// 		font-size: 4rem;
// 		letter-spacing: -0.2rem;
// 		margin-bottom: 2rem;
// 	}

// 	#header-logo {
// 		position: absolute;
// 		left: 50%;
// 		transform: translateX(-50%);
// 		top: 50px;
// 		width: 150px;
// 	}

// 	@media ${device.desktop} {
// 		font-size: 15rem;
// 		letter-spacing: -0.6vw;
// 	}
// 	display: flex;
// 	flex-direction: column;
// 	align-items: center;
// 	justify-content: center;
// `;

// function Visitor() {
// 	const { setState } = useAppData();

// 	return (
// 		<StyledVisitorPage>
// 			<TextLogo />
// 			<Routes>
// 				<Route path='/' element={<ComingSoon />} />
// 				<Route path='/entry' element={<Entry setState={setState} />} />
// 				<Route path='*' element={<NotFound />} />
// 			</Routes>
// 		</StyledVisitorPage>
// 	);
// }

// export default Visitor;
