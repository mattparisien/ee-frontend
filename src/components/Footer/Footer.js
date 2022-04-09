import ArrowButton from "../Button/ArrowButton";
// import { StyledFooter } from "./styles";
import ContainerFluid from "../Containers/ContainerFluid";
import List from "../Lists/List";
import { DrawnLogo } from "../Vector/Svg";
import { useLocomotiveScroll } from "react-locomotive-scroll";
import Fade from "react-reveal/Fade";
import SocialList from "../Lists/SocialList";
import { Typography } from "@mui/material";
import { Box } from "@mui/material";
import { useMediaQuery } from "@mui/material";

export default function Footer(props) {
	const scroll = useLocomotiveScroll();
	const mobile = useMediaQuery("(max-width: 400px)");

	const scrollToTop = () => {
		if (scroll) {
			scroll.scroll.scrollTo(0, 0);
		} else {
			window.scrollTo(0, 0);
		}
	};

	const containerStyles = theme => ({
		display: "flex",
		justifyContent: "space-between",
		// Match [md, ∞)
		//       [900px, ∞)
		[theme.breakpoints.down("sm")]: {
			flexDirection: "column",
			alignItems: "center",
		},
	});

	const boxStyles = theme => ({
		display: "flex",
		flexDirection: "column",
		alignItems: "flex-start",
		[theme.breakpoints.down("sm")]: {
			alignItems: "center",
		},
	});

	const drawnLogo = theme => ({
		width: "10rem",
		[theme.breakpoints.down("sm")]: {
			marginTop: "4rem",
		},
	});

	const spacer = {
		height: "7rem",
	};

	const bottom = theme => ({
		width: "100%",
		height: "7rem",
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
	});

	const footer = theme => ({
		height: "500px",
		[theme.breakpoints.up("md")]: {
			height: "600px",
		},
	});

	const wrap = {
		height: "100%",
		display: "flex",
		flexDirection: "column",
		justifyContent: "space-between",
	};

	return (
		<Box
			className='c-footer -bg-dark'
			component='footer'
			sx={footer}
			// pt={mobile ? 10 : 20}
			// pb={mobile ? 10 : 20}
		>
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
							<Typography variant='h1' className='-splitChars'>
								{props.info && props.info.Heading}
							</Typography>
							<Fade bottom>
								<Typography
									component='a'
									variant='h4'
									href={`mailto:${props.info && props.info.Email}`}
								>
									<div className='email -underline -hover-underline -relative -inline -splitChars'>
										{props.info && props.info.Email}
									</div>
								</Typography>
							</Fade>
						</Box>
						<Box className='c-footer_content_logo' sx={drawnLogo}>
							<Fade right>
								<DrawnLogo color='light' />
							</Fade>
						</Box>
					</Box>

					<Box pt={4} pb={4} sx={bottom}>
						<div className='-flex -align-center -justify-center -splitChars'>
							<p>The Eyes & Ears Agency</p>
							<Box className="-fadeUp">
								<SocialList />
							</Box>
						</div>
						<Box className="-fadeUp">
						<ArrowButton
							color='light'
							rotation={90}
							handleClick={scrollToTop}
						/>
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
