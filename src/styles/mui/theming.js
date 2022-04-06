import { createTheme } from "@mui/material";
import variables from "../scss/_vars.module.scss";

export const theme = createTheme({
	typography: {
		fontFamily: ["Kobe"],
		h1: {
			fontFamily: "Kobe Bold",
		},
	},
	palette: {
		primary: {
			main: variables["colors-yellow"],
		},
	},
});
