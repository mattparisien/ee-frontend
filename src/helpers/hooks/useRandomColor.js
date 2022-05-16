import { ConstructionOutlined } from "@mui/icons-material";
import { useState, useEffect } from "react";

//Returns random chosen color(s) from the defined MUI theme

const useRandomColor = (palette, amount) => {
	//Palette: the theme palette
	//Amount: amount of colors to be generated

	if (!palette) {
		return;
	}

	if (!amount) {
		throw new Error("useRandomColor: Must specify a second argument amount");
	}

	const [colors, setColors] = useState([]);

	const getRandomColor = (array, prevState) => {
		let randomIndex = getRandomIndex(array.length);

		if (
			prevState[0] &&
			prevState[prevState.length - 1] === array[randomIndex]
		) {
			return getRandomColor(array, prevState);
		} else {
			return array[randomIndex];
		}
	};

	const getRandomIndex = arrayLength => {
		return Math.floor(Math.random() * arrayLength);
	};

	useEffect(() => {
		if (palette && !colors[0]) {
			const hexCodes = Object.values(palette);

			for (let i = 0; i <= amount; i++) {
				setColors(prev => [...prev, getRandomColor(hexCodes, prev)]);
			}
		}
	}, [palette]);

	return colors;
};

export default useRandomColor;
