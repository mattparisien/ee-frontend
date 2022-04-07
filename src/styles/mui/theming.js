import { createTheme } from "@mui/material";
import variables from "../scss/_vars.module.scss";

export const theme = createTheme({
	components: {
		MuiBox: {
			variants: [
				{
					props: {sectionGutter: true},
					style: {
						marginTop: "10rem",
						marginBottom: "10rem",
					}
				}
			]
		}
	},
	typography: {
		fontSize: 17,
		fontFamily: ["Times"],
		
		h1: {
			fontFamily: "Kobe Bold",
			
			
		},
		p: {
			fontFamily: "Neue Mtl",
		},
	},
	palette: {
		primary: {
			main: '#000000',
		},
	},
});
