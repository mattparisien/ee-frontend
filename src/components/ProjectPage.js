import React, { useContext } from "react";
import Page from "./Page";
import SectionWrapper from "./SectionWrapper";
import { Typography } from "@mui/material";
import { Box } from "@mui/material";
import { DataContext } from "../App";
import { Paper } from "@mui/material";
import { ImageList, ImageListItem } from "@mui/material";
import Masonry from "@mui/lab/Masonry";
import { styled } from "@mui/material/styles";

function ProjectPage() {
	const data = useContext(DataContext);

	return (
		<Page pageName='Projects'>
			<SectionWrapper height='100vh' bg='light'>
				<Box pt={20}>
					<Typography variant='h2' component='h2' mt={4} mb={4}>
						Projects
					</Typography>
					<Typography variant='h4'>
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem, quod
						similique nostrum dignissimos aspernatur animi repellendus adipisci
						cum reprehenderit recusandae perspiciatis corporis accusamus error
						eos eaque magni voluptatem ea maxime architecto tempore? Quisquam
						quas illum accusamus expedita voluptas illo a!
					</Typography>
				</Box>
			</SectionWrapper>
			<SectionWrapper height='auto' bg='light'>
				<Masonry
					variant='quilted'
					columns={2}
					spacing={10}
					sx={{
						"&:hover .background": {
							opacity: 0.5,
						},
					}}
				>
					{data.posts &&
						data.posts.map(post => {
							return (
								<Paper
									elevation={5}
									sx={{
										position: "relative",
										borderRadius: "10px",
										overflow: "hidden",
                    "&:hover .background": {
                      opacity: 0,
                    }
									}}
								>
									<Box>
										<img
											className='GridItem__image'
											src={post.media.featureImage.url}
											style={{
												height: "100%",
												width: "100%",
												objectFit: "cover",
											}}
										></img>
										<Box
											className='title-overlay'
											sx={{
												position: "absolute",
												width: "100%",
												height: "100%",
												top: 0,
												left: 0,
											}}
										>
											<Box
												className='title-overlay__inner'
												sx={{ position: "relative", height: "100%" }}
                        p={4}
											>
												<Typography variant='h5' component='div'>
													{post.title}
												</Typography>
												<Typography variant='h5' component='div'>
													{post.subtitle}
												</Typography>
											</Box>
											<Box
												className='background'
												sx={{
													position: "absolute",
													top: 0,
													left: 0,
													width: "100%",
													height: "100%",
													backgroundColor: "black",
													transition: "800ms ease",
													opacity: 0,
												}}
											></Box>
										</Box>
									</Box>
								</Paper>
							);
						})}
				</Masonry>
				{/* <ImageList variant='masonry' cols={3} gap={8}>
					{data.posts &&
						data.posts.map(post => {
							return (
								<ImageListItem>
									<img
										className='GridItem__image'
										src={post.media.featureImage.url}
										style={{
											height: "100%",
											width: "100%",
											objectFit: "cover",
										}}
									></img>
								</ImageListItem>
							);
						})}
				</ImageList> */}
			</SectionWrapper>
		</Page>
	);
}

export default ProjectPage;
