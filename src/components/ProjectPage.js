import React, { useContext, useEffect, useState } from "react";
import Page from "./Page";
import SectionWrapper from "./SectionWrapper";
import { Typography } from "@mui/material";
import { Box } from "@mui/material";
import { DataContext } from "../App";
import { Paper } from "@mui/material";
import { ImageList, ImageListItem } from "@mui/material";
import Masonry from "@mui/lab/Masonry";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import DirectionsIcon from "@mui/icons-material/Directions";

function ProjectPage() {
	const data = useContext(DataContext);

	const [searchValue, setSearchValue] = useState(null);
	const [projects, setProjects] = useState(null);

	const handleChange = e => {
		setSearchValue(e.target.value);
	};

	useEffect(() => {
		if (data.posts) {
			setProjects(data.posts);
		}

		if (data.posts && searchValue) {
			const array = Object.values(data.posts);

			const filterByValue = (array, string) => {
				let count = 0;
				for (let obj of array) {
					if (
						obj.title.toLowerCase().includes(string.toLowerCase()) ||
						obj.subtitle.toLowerCase().includes(string.toLowerCase())
					) {
						count > 0
							? setProjects(prev => [...prev, obj])
							: setProjects([obj]);
						count++;
					}
				}
			};

			filterByValue(array, searchValue);
		}
	}, [searchValue, data]);

	useEffect(() => {
		console.log(projects);
	}, [projects]);

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
				<Box className='SearchBar' mb={4} width='100%'>
					<Paper
						component='form'
						sx={{
							p: "2px 4px",
							display: "flex",
							alignItems: "center",
							width: 400,
						}}
					>
						<InputBase
							sx={{ ml: 1, flex: 1 }}
							placeholder='Search Projects'
							inputProps={{ "aria-label": "search projects" }}
							onChange={handleChange}
              autoFocus
						/>
						<IconButton type='submit' sx={{ p: "10px" }} aria-label='search'>
							<SearchIcon />
						</IconButton>
						<Divider sx={{ height: 28, m: 0.5 }} orientation='vertical' />
					</Paper>
				</Box>
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
					{projects &&
						projects.map(post => {
							return (
								<Paper
									elevation={5}
									sx={{
										position: "relative",
										borderRadius: "10px",
										overflow: "hidden",
										"&:hover .background": {
											opacity: "0 !important",
										},
										"&:hover img": {
											transform: "scale(1.1)",
										},
									}}
								>
									<Box>
										<Link
											to={`/projects/${post.id}`}
											style={{
												display: "block",
												width: "100%",
												height: "100%",
											}}
										>
											<img
												className='GridItem__image'
												loading='lazy'
												src={post.media.featureImage.url}
												style={{
													height: "100%",
													width: "100%",
													objectFit: "cover",
													transition: "2s ease",
												}}
											></img>
											<Box
												className='label'
												sx={{
													position: "absolute",
													width: "100%",
													height: "100%",

													bottom: 0,
													left: 0,
												}}
											>
												<Box
													className='label__inner'
													sx={{ position: "relative", height: "100%" }}
													p={4}
												>
													<Typography variant='h6' component='div'>
														{post.title}
													</Typography>
													<Typography variant='h6' component='div'>
														{post.subtitle}
													</Typography>
												</Box>
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
													transition: "400ms ease",
													opacity: 0,
												}}
											></Box>
										</Link>
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
