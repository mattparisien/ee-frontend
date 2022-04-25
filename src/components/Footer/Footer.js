import { useQuery } from "@apollo/client";
import { Box, Typography, useMediaQuery } from "@mui/material";
import { useEffect, useState } from "react";
import { useLocomotiveScroll } from "react-locomotive-scroll";
import FOOTER from "../../api/graphql/queries/static/GetFooter";
// import { StyledFooter } from "./styles";
import ContainerFluid from "../Containers/ContainerFluid";
import { DrawnLogo } from "../Vector/Svg";
import {
	bottom,
	boxStyles,
	containerStyles,
	drawnLogo,
	footer,
	spacer,
	wrap
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

									<Typography
										component='a'
										variant='h5'
										href={`mailto:${info.email}`}
									>
										<div className='email -underline -hover-underline -relative -inline -splitChars'>
											{info.email}
										</div>
									</Typography>
								</>
							)}
						</Box>
						<Box className='c-footer_content_logo' sx={drawnLogo}>
							<DrawnLogo color='light' />
						</Box>
					</Box>

					<Box pt={4} pb={4} sx={bottom}>
						<div className='-flex -align-center -justify-center -splitChars'>
							<Typography variant='body3' component='p' fontWeight={400}>
								The Eyes & Ears Agency
							</Typography>
							{/* <Box className='-fadeUp'>
								<SocialList />
							</Box>	 */}
						</div>

						{/* <nav className='c-footer_nav'>
							<List items={props.navItems} color='light' />
						</nav> */}
					</Box>
				</Box>
			</ContainerFluid>
		</Box>
	);
}
