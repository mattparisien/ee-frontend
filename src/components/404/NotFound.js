import React from "react";
import Button from "../Button/Button";
import { Link } from "react-router-dom";

function NotFound() {
	return (
		<>
			<div>404 Not Found</div>
			<Button variant='contained' color='dark'>
				<Link to={"/entry"}>Log in</Link>
			</Button>
		</>
	);
}

export default NotFound;
