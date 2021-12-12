import GridItem from "../components/GridItem";
import Grid from "../components/Grid";
import Image from "../components/Image";
import { Link } from "react-router-dom";
import divideArray from "./divideArray";

export default function renderGridItems(data) {
	let arrayofGrids = "";

	if (!data) {
		return;
	}

	arrayofGrids = divideArray(data.data, 7);
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
									url={`http://localhost:1337${post.attributes.FeatureImage.data.attributes.url}`}
									title={post.attributes.Title}
									subTitle={post.attributes.Subtitle}
									classes={"project-grid-item__image-wrapper"}
									key={post.id}
								/>
								<div className='project-grid-item__mobile-title'>
									<div className='title'>{post.attributes.Title}</div>
									<div className='subtitle'>{post.attributes.Subtitle}</div>
								</div>
							</Link>
						</GridItem>
					);
				})}
			</Grid>
		);
	});
}
