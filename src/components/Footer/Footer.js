import { Box, Typography, useMediaQuery } from "@mui/material";
import { useState, useEffect } from "react";
import { useLocomotiveScroll } from "react-locomotive-scroll";
import Fade from "react-reveal/Fade";
import ArrowButton from "../Button/ArrowButton";
// import { StyledFooter } from "./styles";
import ContainerFluid from "../Containers/ContainerFluid";
import SocialList from "../Lists/SocialList";
import { DrawnLogo } from "../Vector/Svg";
import { useQuery } from "@apollo/client";
import FOOTER from "../../api/graphql/queries/static/GetFooter";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import {
	containerStyles,
	boxStyles,
	drawnLogo,
	spacer,
	bottom,
	footer,
	wrap,
} from "./styles/styles";

export default function Footer(props) {
	const [info, setInfo] = useState(null);
	const { loading, error, data } = useQuery(FOOTER);
	const scroll = useLocomotiveScroll();
	const mobile = useMediaQuery("(max-width: 400px)");

	useEffect(() => {
		if (data && !loading) {
			setInfo({
				heading: data.footer.data.attributes.Heading,
				email: data.footer.data.attributes.Email,
			});
		}
	}, [data, loading]);

	const handleScrollTop = e => {
		e.preventDefault();
		if (scroll) {
			scroll.scroll.scrollTo(0, 0);
		} else {
			window.scrollTo(0, 0);
		}
	};

	return (
		<Box className='c-footer -bg-dark' component='footer' sx={footer}>
			<ContainerFluid classes='-stretchY'>
				<Box sx={wrap}>
					<Box className='spacer' sx={spacer}></Box>
					<Box className='footer-center-content' sx={containerStyles}>
						<Box
							sx={boxStyles}
							display='flex'
							flexDirection='column'
							alignItems={mobile ? "center" : "flex-start"}
							justifyContent='center'
						>
							{info && (
								<>
									<Typography variant='h1' className='-splitChars'>
										{info && info.heading}
									</Typography>

									<Fade bottom>
										<Typography
											component='a'
											variant='h5'
											href={`mailto:${info.email}`}
										>
											<div className='email -underline -hover-underline -relative -inline -splitChars'>
												{info.email}
											</div>
										</Typography>
									</Fade>
								</>
							)}
						</Box>
						<Box className='c-footer_content_logo' sx={drawnLogo}>
							<Fade right>
								<DrawnLogo color='light' />
							</Fade>
						</Box>
					</Box>

					<Box pt={4} pb={4} sx={bottom}>
						<div className='-flex -align-center -justify-center -splitChars'>
							<Typography variant='body2' component='p'>
								The Eyes & Ears Agency
							</Typography>
							<Box className='-fadeUp'>
								<SocialList />
							</Box>
						</div>
						<Box className='-fadeUp'>
							<a
								onClick={handleScrollTop}
								style={{
									display: "flex",
									alignItems: "center",
									justifyContent: "center",
								}}
							>
								<Typography variant='body2'>Back to top </Typography>
								<ArrowForwardIosIcon
									sx={{
										transform: `rotate(-90deg)`,
										width: "1rem",
										marginLeft: "0.3rem",
									}}
								/>
							</a>
						</Box>

						{/* <nav className='c-footer_nav'>
							<List items={props.navItems} color='light' />
						</nav> */}
					</Box>
				</Box>
			</ContainerFluid>
		</Box>
	);
}
