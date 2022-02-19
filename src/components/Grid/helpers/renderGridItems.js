import { Image, Grid, GridItem } from "../../index";
import { Link } from "react-router-dom";
import divideArray from "./divideArray";

export default function renderGridItems(data) {
	let arrayofGrids = "";

	if (!data) {
		return;
	}

	arrayofGrids = divideArray(data, 7);

	return arrayofGrids.map(nested => {
		return (
			<Grid
				columns={12}
				gap={"4vw"}
				rows={"grid-auto-rows: 15vw"}
				classes={"project-grid"}
				key={nested.id}
			>
				{nested.map((post, index) => {
					return (
						<GridItem
							classes={`project-grid__item project-grid__item__${index + 1}`}
							key={post.id}
						>
							<Link
								to={`/projects/${post.id}`}
								className='project-grid-item__link  fade-up -position-relative'
								key={post.id}
							>
								<Image
									url={post.featureImage}
									title={post.title}
									subTitle={post.subtitle}
									classes={"project-grid-item__image-wrapper"}
									key={post.id}
									hasOverlay
								/>
								<div className='project-grid-item__mobile-title'>
									<div className='title'>{post.title}</div>
									<div className='subtitle'>{post.subtitle}</div>
								</div>
							</Link>
						</GridItem>
					);
				})}
			</Grid>
		);
	});
}
