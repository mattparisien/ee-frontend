import React, { useEffect, useState, useContext, useRef } from "react";
import { TextField } from "@mui/material";
import { SearchContext, DataContext } from "../../context/Context";
import { Box } from "@mui/system";

function SearchBar() {
	const { search, setSearch } = useContext(SearchContext);
	const data = useContext(DataContext);
	const [value, setValue] = useState("");
	const hasSearched = useRef(false);

	const handleChange = e => {
		if (!hasSearched.current) {
			hasSearched.current = true;
		}

		setValue(e.target.value);
	};

	useEffect(() => {
		value !== "" && setSearch(value);
	}, [value]);

	const searchBarStyles = {
		"*:focus": {
			outline: "none",
		},
		width: "300px",
	};

	const styles = {
		container: {
			display: "flex",
			flexWrap: "wrap",
		},
		textField: {
			width: 300,
			margin: 100,
		},
		//style for font size
		resize: {
			fontSize: 50,
		},
	};

	return (
		<Box mb={5}>
			<TextField
				sx={searchBarStyles}
				placeholder={"Search projects"}
				onChange={handleChange}
				value={value}
				autoFocus={true}
				variant='standard'
				label={"Search our collection"}
				InputProps={{
					classes: {
						input: styles.resize,
					},
				}}
			/>
		</Box>
	);
}

export default SearchBar;
