import ArrowButton from "../Button/ArrowButton";
// import { StyledFooter } from "./styles";
import ContainerFluid from "../Containers/ContainerFluid";
import List from "../Lists/List";
import { DrawnLogo } from "../Vector/Svg";
import { useLocomotiveScroll } from "react-locomotive-scroll";
import Fade from "react-reveal/Fade";
import SocialList from "../Lists/SocialList";

export default function Footer(props) {
	// const footerRef = useRef(null);
	// const { location } = props;

	// const navLinks = navigation.map(listItem => (
	// 	<li key={listItem.id}>
	// 		<Link to={listItem.path}>{listItem.title}</Link>
	// 	</li>
	// ));
	const scroll = useLocomotiveScroll();

	const scrollToTop = () => {
		if (scroll) {
			scroll.scroll.scrollTo(0, 0);
		} else {
			window.scrollTo(0, 0);
		}
	};

	return (
		<footer className='c-footer -bg-dark'>
			<ContainerFluid classes='-stretchY'>
				<div className='c-footer_content'>
					<div className='-flex -align-center -justify-center'>
						<div className='c-footer_content_contact'>
							<h2 className='o-h1 -split -fadeUpChars'>
								{props.info && props.info.Heading}
							</h2>
							<Fade bottom>
								<a href={`mailto:${props.info && props.info.Email}`}>
									<div className='email -underline -hover-underline -relative'>
										{props.info && props.info.Email}
									</div>
								</a>
							</Fade>
						</div>
						<div className='c-footer_content_logo'>
							<Fade right>
								<DrawnLogo />
							</Fade>
						</div>
					</div>

					<div className='c-footer_bottom'>
						<Fade bottom>
							<div className='-flex -align-center -justify-center'>
								<h4 className='o-h4 c-footer_brand'>The Eyes & Ears Agency</h4>
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
					</div>
				</div>
				{/* {layout === "contact" && <Contact />} */}
				{/* {layout === "project" && (
					<Project footerRef={footerRef} title={data && data.title} />
				)} */}

				{/* <NavList links={navLinks} /> */}
			</ContainerFluid>
		</footer>
	);
}
