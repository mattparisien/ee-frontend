import SplitBlock from "./SplitBlock";
import Markdown from "../../Markdown/Markdown";

function SplitTextListBlock({ data }) {
	return (
		data && (
			<SplitBlock
				wrapperClasses='justify-between'
				rightClasses='md:ml-20 md:w-1/2 mt-5 md:mt-0'
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
