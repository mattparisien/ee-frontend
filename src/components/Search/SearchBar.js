import React, { useEffect, useState } from "react";
import { TextField } from "@mui/material";

function SearchBar() {
	const [value, setValue] = useState("");

	const handleChange = e => {
		setValue(e.target.value);
	};

	useEffect(() => {
		console.log(value);
	}, [value]);

	return (
		<TextField
			placeholder={"Search projects"}
			onChange={handleChange}
			value={value}
		/>
	);
}

export default SearchBar;
