import React, { useState, useEffect } from "react";
import { Box, FormGroup, TextField, Alert } from "@mui/material";
import Button from "../../../Button/Button";
import { useNavigate } from "react-router-dom";

function Entry() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [success, setSuccess] = useState(false);
	const [error, setError] = useState(false);
	const navigate = useNavigate();

	const handleChange = e => {
		setError(null);
		e.target.name === "email"
			? setEmail(e.target.value)
			: setPassword(e.target.value);
	};

	const handleSubmit = e => {
		const validEmail = process.env.REACT_APP_AUTH_EMAIL;
		const validPassword = process.env.REACT_APP_AUTH_PASSWORD;

		if (email === validEmail && password === validPassword) {
			setSuccess(true);
			console.log("success!");
		} else {
			setError("Email or password is incorrect");
		}

		e.preventDefault();
	};

	useEffect(() => {
		success && navigate('/')
	}, [success])

	return (
		<>
			<div className='entry-heading'>Enter</div>
			<Box component='form' sx={{ width: "400px" }} onSubmit={handleSubmit} s>
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
				{error && (
					<Alert sx={{ marginTop: 2 }} severity='error'>
						{error}
					</Alert>
				)}
			</Box>
		</>
	);
}

export default Entry;
