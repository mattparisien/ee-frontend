import React from "react";
import { Box } from "@mui/material";
import { motion } from "framer-motion";
import Scale from "../HOC/Scale";

function Accent({ component, color }) {


	return (
		<div className='Accent w-[25%] h-[20%] md:w-[37%] md:h-[30%] absolute top-[-9%] left-[-11%] md:top-[-14%] md:left-[-18%] mix-blend-multiply'>
			<Scale>
				<div className='w-full h-full bg-yellow-custom rounded-full'></div>
			</Scale>
		</div>
	);
}

export default Accent;
