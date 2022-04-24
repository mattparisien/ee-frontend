import { ConstructionOutlined } from "@mui/icons-material";
import { useState, useEffect } from "react";

//Returns random chosen color(s) from the defined MUI theme

const useRandomColor = (palette, amount) => {
	//Palette: the theme palette
	//Amount: amount of colors to be generated

	if (!amount) {
		throw new Error("useRandomColor: Must specify a second argument amount");
	}

	const [colors, setColors] = useState([]);

	const getRandomColor = (array, prevIndex) => {
		let randomIndex = getRandomIndex(array.length);

		if (
			prevIndex !== -1 &&
			colors[0] &&
			colors[prevIndex] === array[randomIndex]
		) {
			return getRandomColor(array, prevIndex);
		} else {
      return array[randomIndex];
    }
	};

	const getRandomIndex = arrayLength => {
		return Math.floor(Math.random() * arrayLength);
	};

	useEffect(() => {
		if (palette) {
			const hexCodes = Object.values(palette);

			for (let i = 0; i <= amount; i++) {
				const randomColor = getRandomColor(hexCodes, i - 1);

				setColors(prev => [...prev, randomColor]);
			}
		}
	}, [palette]);

  useEffect(() => {
    console.log(colors)
  }, [colors])
};

export default useRandomColor;
