import React from "react";
import Button from "../Button/Button";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledNotFound = styled.div`
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	.not-found-title {
		font-family: "Kobe";
		font-size: 15vw;
		letter-spacing: -0.6vw;
		position: relative;
	}
`;

function NotFound() {
	return (
		<StyledNotFound className='NotFound'>
			<div className='not-found-title'>
				404 Not Found
			</div>
			<Button variant='contained' color='dark'>
				<Link to={"/entry"}>Log in</Link>
			</Button>
		</StyledNotFound>
	);
}

export default NotFound;
