import React from "react";
import styled from "styled-components";
import { device } from "../../styles/device";
import { TextLogo } from "../../Vector/Svg";
import { Routes, Route, Link } from "react-router-dom";
import ComingSoon from "./Visitor/ComingSoon";
import Entry from "./Visitor/Entry";
import useAppData from "../../../helpers/hooks/useAppData";

const StyledVisitorPage = styled.div`
	background-color: ${({ theme }) => theme.colors.light};
	color: ${({ theme }) => theme.colors.dark};
	width: 100%;
	height: 100%;
	font-family: "Kobe";
	font-size: 15vw;
	letter-spacing: -0.6vw;
	position: relative;

	.entry-heading {
		font-size: 4rem;
		letter-spacing: -0.2rem;
		margin-bottom: 2rem;
	}

	#header-logo {
		position: absolute;
		left: 50%;
		transform: translateX(-50%);
		top: 50px;
		width: 10vw;
		max-width: 150px;
		
	}

	@media ${device.desktop} {
		font-size: 15rem;
		letter-spacing: -0.6vw;
	}
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;


`;

function Visitor() {

	const {setState} = useAppData();

	return (
		<StyledVisitorPage>
			<TextLogo />
			<Routes>
				<Route path='/' element={<ComingSoon />} />
				<Route path='/entry' element={<Entry setState={setState}/>} />
			</Routes>
		</StyledVisitorPage>
	);
}

export default Visitor;
