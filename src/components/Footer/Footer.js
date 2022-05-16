import { useQuery } from "@apollo/client";
import { Box, Typography, useMediaQuery } from "@mui/material";
import { useEffect, useState } from "react";
import { useLocomotiveScroll } from "react-locomotive-scroll";
import FOOTER from "../../api/graphql/queries/static/GetFooter";
// import { StyledFooter } from "./styles";
import ContainerFluid from "../Containers/ContainerFluid";
import Scale from "../HOC/Scale";
import SplitText from "../HOC/SplitText";
import SocialList from "../Lists/SocialList";
import { DrawnLogo } from "../Vector/Svg";
import {
	bottom,
	boxStyles,
	containerStyles,
	drawnLogo,
	footer,
	spacer,
	wrap,
} from "./styles/styles";
import Heading from "../Heading/Heading";

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
										<SplitText>{info && info.heading}</SplitText>
									</Typography>
									<Heading level={3}>
										<a
											href={`mailto:${info.email}`}
											onClick={e => e.preventDefault()}
										>
											<SplitText>{info.email}</SplitText>
										</a>
									</Heading>
								</>
							)}
						</Box>
						<Box className='c-footer_content_logo' sx={drawnLogo}>
							<Scale>
								<DrawnLogo color='light' />
							</Scale>
						</Box>
					</Box>

					<Box pt={4} pb={4} sx={bottom}>
						<Heading level={4}>The Eyes & Ears Agency</Heading>
						<SocialList color='light' />
					</Box>
				</Box>
			</ContainerFluid>
		</Box>
	);
}
