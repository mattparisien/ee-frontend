import React from "react";
import classNames from "classnames";
import { Container as MuiContainer } from "@mui/material";
import combineStyles from "../../helpers/combineStyles";

function Container(props) {
	const classes = classNames("container", { [props.classes]: props.classes });

	const containerSpacing = theme => ({
		[theme.breakpoints.up("xs")]: {
			paddingLeft: theme.spacing(4),
			paddingRight: theme.spacing(4),
		},
		[theme.breakpoints.up("sm")]: {
			paddingLeft: theme.spacing(8),
			paddingRight: theme.spacing(8),
		},
		[theme.breakpoints.up("md")]: {
			paddingLeft: theme.spacing(20),
			paddingRight: theme.spacing(20),
		},
	});

	return (
		<MuiContainer
			className={classes}
			maxWidth={props.disableMaxWidth ? false : "lg"}
			sx={combineStyles(
				!props.disableGutters ? containerSpacing : {},
				props.sx,
				{
					padding: props.disableGutters && "0 !important",
				}
			)}
		>
			{props.children}
		</MuiContainer>
	);
}

export default Container;
