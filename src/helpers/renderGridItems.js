
import GridItem from "../components/GridItem";
import Grid from "../components/Grid";
import Image from "../components/Image";
import { Link } from "react-router-dom";
import divideArray from "./divideArray";

export default function renderGridItems (data) {
  let arrayofGrids = "";

  if (!data) {
    return;
  }

  arrayofGrids = divideArray(data, 7);

  return arrayofGrids.map(nested => {
    return (
      <Grid columns={12} gap={"4vw"}>
        {nested.map((post, index) => {
          return (
            <GridItem
              classes={`project-grid__item project-grid__item__${index + 1}`}
              key={post.id}
            >
              <Link
                to={`/projects/${post.id}`}
                className='project-grid-item__link  fade-up -position-relative'
                
              >
                <Image url={post.url} title={post.title} />
              </Link>
            </GridItem>
          );
        })}
      </Grid>
    );
  });
};
