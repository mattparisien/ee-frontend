import React, { useState } from "react";
import { Box, FormGroup, TextField } from "@mui/material";
import Button from "../../../Button/Button";
import axios from "axios";

function Entry() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const handleChange = e => {
		e.target.name === "email"
			? setEmail(e.target.value)
			: setPassword(e.target.value);
	};

	const handleSubmit = (e) => {

		e.preventDefault();

		axios	
			.post(`${process.env.REACT_API_URL}/auth`, {
				identifier: email.at,
				password: password,
			})
			.then(res => console.log(res))
			.catch(err => console.log(err));
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
						id='outlined-basic'
						value={password}
						onChange={handleChange}
						required
						sx={{ marginBottom: 2 }}
					/>
					<TextField
						label='Password'
						name='password'
						type='password'
						variant='outlined'
						onChange={handleChange}
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
