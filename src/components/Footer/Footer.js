import ArrowButton from "../Button/ArrowButton";
// import { StyledFooter } from "./styles";
import ContainerFluid from "../Containers/ContainerFluid";
import List from "../Lists/List";
import { DrawnLogo } from "../Vector/Svg";
import { useLocomotiveScroll } from "react-locomotive-scroll";

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
							<h2 className='o-h2'>{props.info && props.info.Heading}</h2>
							<a href={`mailto:${props.info && props.info.Email}`}>
								<h3 className='o-h3'>{props.info && props.info.Email}</h3>
							</a>
						</div>
						<div className='c-footer_content_logo'>
							<DrawnLogo />
						</div>
					</div>

					<div className='c-footer_bottom'>
						<h4 className='o-h4 c-footer_brand'>The Eyes & Ears Agency</h4>
						<nav className='c-footer_nav'>
							<List items={props.navItems} color='light' />
						</nav>
						<ArrowButton
							color='light'
							rotation={90}
							handleClick={scrollToTop}
						/>
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
