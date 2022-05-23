import { Box } from "@mui/material";
import classNames from "classnames";

function SplitBlock(props) {
	const wrapper = classNames("split-layout flex flex-col md:flex-row", {
		[props.wrapperClasses]: props.wrapperClasses,
	});

	return (
		<div className={wrapper}>
			<Left component={props.leftComponent} classes={props.leftClasses} />
			<Right component={props.rightComponent} classes={props.rightClasses} />
		</div>
	);

	function Left({ component, classes }) {
		return (
			<Box className={`split-layout_section is-left ${classes || ""}`}>
				{component}
			</Box>
		);
	}
	function Right({ component, classes }) {
		return (
			<Box className={`split-layout_section is-right mt-5 md:mt-0 ${classes || ""}`}>
				{component}
			</Box>
		);
	}
}

export default SplitBlock;
