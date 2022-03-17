import React from "react";
import ContainerFluid from "../../Containers/ContainerFluid";
import Section from "../../Containers/Section";
import { useContext } from "react";
import { DataContext } from "../../../App";

function HomePage() {
	const data = useContext(DataContext);

	console.log(data)

	return (
		<ContainerFluid classes='-bg-light'>
			<Section classes='-padding-lg'>
				<div className='c-steps'>
					{data &&
						data.steps &&
						data.steps.map((step, i) => {
							return (
								<div className='c-steps_item' key={i}>
									<h3 className='o-h3'>{step.title}</h3>
									<p className='o-text'>{step.body}</p>
								</div>
							);
						})}
				</div>
			</Section>
		</ContainerFluid>
	);
}

export default HomePage;
