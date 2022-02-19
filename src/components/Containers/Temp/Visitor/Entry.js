import React, { useState, useEffect } from "react";
import { Box, FormGroup, TextField } from "@mui/material";
import Button from "../../../Button/Button";
import axios from "axios";

function Entry() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [success, setSuccess] = useState(false);
	const [error, setError] = useState(false);

	const handleChange = e => {
		console.log(e.target.value);
		e.target.name === "email"
			? setEmail(e.target.value)
			: setPassword(e.target.value);
	};

	useEffect(() => {
		console.log(process.env.REACT_APP_API_URL)
	}, [email, password]);

	const handleSubmit = e => {
		e.preventDefault();
	};

	return (
		<>
			<div className='entry-heading'>Enter</div>
			<Box component='form' sx={{ width: "400px" }} onSubmit={handleSubmit}>
				<FormGroup sx={{ marginBottom: 4 }}>
					<TextField
						label='Email'
						name='email'
						type='email'
						variant='outlined'
						defaultValue={email}
						value={email}
						onChange={e => handleChange(e)}
						sx={{ marginBottom: 2 }}
					/>
					<TextField
						label='Password'
						name='password'
						type='password'
						variant='outlined'
						onChange={e => handleChange(e)}
						id='outlined-basic'
						value={password}
						required
					/>
				</FormGroup>
				<Button variant='contained' color='dark' fullWidth type='submit'>
					Enter
				</Button>
			</Box>
		</>
	);
}

export default Entry;
