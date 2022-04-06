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

export default function Footer(props) {
	const scroll = useLocomotiveScroll();

	const scrollToTop = () => {
		if (scroll) {
			scroll.scroll.scrollTo(0, 0);
		} else {
			window.scrollTo(0, 0);
		}
	};

	return (
		<Box className='c-footer -bg-dark' component="footer" pt={20} pb={20}>
			<ContainerFluid classes='-stretchY'>
				<div className='c-footer_content'>
					<div className='-flex -align-center -justify-center'>
						<div className='c-footer_content_contact'>
							<Typography variant='h1'>
								{props.info && props.info.Heading}
							</Typography>
							<Fade bottom>
								<Typography
									component='a'
									variant="h4"
									href={`mailto:${props.info && props.info.Email}`}
								>
									<div className='email -underline -hover-underline -relative -inline'>
										{props.info && props.info.Email}
									</div>
								</Typography>
							</Fade>
						</div>
						<div className='c-footer_content_logo'>
							<Fade right>
								<DrawnLogo color='light' />
							</Fade>
						</div>
					</div>

					<Box className='c-footer_bottom' p={4}>
						<Fade bottom>
							<div className='-flex -align-center -justify-center'>
								<p>The Eyes & Ears Agency</p>
								<SocialList />
							</div>

							<nav className='c-footer_nav'>
								<List items={props.navItems} color='light' />
							</nav>
							<ArrowButton
								color='light'
								rotation={90}
								handleClick={scrollToTop}
							/>
						</Fade>
					</Box>
				</div>
				{/* {layout === "contact" && <Contact />} */}
				{/* {layout === "project" && (
					<Project footerRef={footerRef} title={data && data.title} />
				)} */}

				{/* <NavList links={navLinks} /> */}
			</ContainerFluid>
		</Box>
	);
}
