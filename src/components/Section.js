import classNames from "classnames";

export default function Section(props) {
	const sectionClass = classNames("c-section", props.classes);

	return (
		<section className={sectionClass} data-scroll-section>
			{props.children}
		</section>
	);
}
