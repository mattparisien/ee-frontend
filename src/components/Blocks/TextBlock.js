import React from "react";
import Markdown from "../Markdown/Markdown";
import FadeChildren from "../HOC/FadeChildren";
import { Box } from "@mui/material";

function TextBlock({ data }) {
	return <Markdown>{data.text}</Markdown>;
}

export default TextBlock;
