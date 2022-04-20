import React from "react";
import { Typography, Box } from "@mui/material";
import ReactMarkdown from "react-markdown";
import Markdown from "../../../Markdown/Markdown";


function TextBlock({ data }) {


	return <Markdown >{data.data.text}</Markdown>;
}

export default TextBlock;
