import SplitBlock from "./SplitBlock";
import Markdown from "../../Markdown/Markdown";


function SplitTextListBlock({ data }) {
	return (
		data && (
			<SplitBlock
				flex={{
					left: 1.4,
					right: 0.7,
				}}
				rightStyles={theme => ({
					marginLeft: "3rem",
					[theme.breakpoints.down("sm")]: {
						marginLeft: 0,
					},
				})}
				leftComponent={<Left text={data.Text} />}
				rightComponent={<Right list={data.List} />}
			/>
		)
	);
}

function Left({ text }) {
	return (
		<div className={"Left"}>
			<Markdown paragraphClasses={"md:mt-3"}>{text}</Markdown>
		</div>
	);
}
function Right({ list }) {
	return (
		<div className='Right'>
			<Markdown>{list}</Markdown>
		</div>
	);
}

export default SplitTextListBlock;
