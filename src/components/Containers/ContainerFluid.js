import classNames from "classnames";
import React, { forwardRef } from "react";
import styled from "styled-components";
import { Container } from "@mui/material";
import { device } from "../styles/device";
import { Box } from "@mui/system";

function ContainerFluid(props, ref) {
	const containerClass = classNames("Container", props.classes);

	return <Container className='Container' maxWidth="xl" sx={{height: "100%"}}>{props.children}</Container>;
}

export default forwardRef(ContainerFluid);
