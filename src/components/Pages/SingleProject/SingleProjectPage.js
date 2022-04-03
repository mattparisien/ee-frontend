import gsap from "gsap";
import React, {
	useContext,
	useEffect,
	useLayoutEffect,
	useMemo,
	useRef,
	useState
} from "react";
import { Helmet } from "react-helmet-async";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import Fade from "react-reveal/Fade";
import { DataContext } from "../../../context/Context";
import { shuffleColors } from "../../../helpers/shuffleColors";
import ContainerFluid from "../../Containers/ContainerFluid";
import Section from "../../Containers/Section";
import Figure from "../../Figure/Figure";
import ProjectGrid from "../Projects/ProjectGrid";
import Next from "./Next";

function SingleProjectPage({ location, transitioning, toggleTransitioning }) {
	const data = useContext(DataContext);

	const [param, setParam] = useState(null);
	const [info, setInfo] = useState(null);
	const textWrapper = useRef(null);
	const heroImage = useRef(null);
	const revealer = useRef(null);
	const tl = useRef(gsap.timeline());
	// const scroll = useLocomotiveScroll();
	const mobile = window.matchMedia("(max-width: 820px)");

	const accentColor = useMemo(() => shuffleColors(), []);

	useLayoutEffect(() => {
		const desktopTimeline = () => {
			
			tl.current

				.set(revealer.current, { transition: "none" })
				.set(textWrapper.current, { opacity: 1 })

				// .to(lines, {
				// 	y: 0,
				// 	opacity: 1,
				// 	ease: "power3.out",
				// 	duration: 1,
				// 	stagger: 0.1,
				// })
				.to(
					textWrapper.current,
					{
						bottom: 0,
						top: "50%",
						y: "-50%",
						duration: 3,
						ease: "expo.inOut",
					},
					0.4
				);

			return tl.current;
		};

		setTimeout(() => {
			if (!mobile.matches) {
				desktopTimeline();
			}
		}, 400);
	}, [mobile.matches]);

	useEffect(() => {
		//Find query param
		if (!param) {
			let param = "";
			let counter = 0;
			for (let i = 0; i < location.pathname.length; i++) {
				if (location.pathname[i] === "/") {
					counter += 1;

					if (counter > 1) {
						param = location.pathname.slice(i + 1, location.pathname.length);
					}
				}
			}
			setParam(param);
		}

		if (data && data.posts && param && !info) {
			console.clear();

			// setInfo(data.posts.filter(x => x.id === param));
			const currentPost = data.posts.filter(x => x.id === param);

			const nextPostIndex =
				data.posts.indexOf(data.posts.find(x => x.id === currentPost[0].id)) +
				1;
			const nextPost =
				data.posts[nextPostIndex === data.posts.length ? 0 : nextPostIndex];

			setInfo({ ...currentPost, nextPost: nextPost });
		}
	}, [data, location, param,  info]);



	return (
		<>
			<Helmet>
				<title>
					{`${info && info[0].title} - ${info && info[0].subtitle}`}{" "}
				</title>
				<meta name='description' content='Helmet application' />
			</Helmet>
			<div className='o-page o-single-project'>
				<Section data-theme='light' classes='o-hero'>
					<ContainerFluid>
						<div className='o-container_inner'>
							<div className='o-hero_text u-desktop-js-anim' ref={textWrapper}>
								<Fade bottom delay={500}>
									<h3
										className='o-h3 -split -fadeUp'
										
									>
										{info && info[0].title}
									</h3>
								</Fade>
								<Fade bottom delay={500}>
									<h2
										className='o-h2 -bold -split -fadeUpChars'
										style={{ color: accentColor[0] }}
									>
										{info && info[0].subtitle}
									</h2>
								</Fade>
								{/* <h3 className='o-h3'>{info && info[0].subtitle}</h3> */}
								{/* </Fade> */}
							</div>

							<div className='o-hero_image' ref={heroImage}>
								<Figure
									noReveal
									effectDelay={5000}
									src={info && info[0].media.featureImage.url}
									alt={info && info[0].media.featureImage.altText}
								/>
							</div>

							{/* 				
					<div className='o-hero_image-wrapper-2'>
						<img
							src={info && info[0].media.featureImage.url}
							alt={info && info[0].media.featureImage.altText}
						/>
					</div> */}
						</div>
					</ContainerFluid>
				</Section>

				<Section classes='o-overview -padding-lg' data-theme='light'>
					<ContainerFluid>
						<Fade bottom>
							<div className='o-overview_left'>
								<ReactMarkdown
									className='o-h3'
									children={info && info[0].goal}
								/>
							</div>
						</Fade>

						<div className='o-overview_right'>
							<Fade bottom>
								<ReactMarkdown
									className='o-text -body'
									children={info && info[0].about1}
								/>
							</Fade>
						</div>
					</ContainerFluid>
				</Section>
				{info && info[0].media.additional && (
					<Section data-theme='light' classes='o-feature'>
						<ContainerFluid>
							<div className='o-feature_item'>
								<Figure
									noFrame
									
									src={
										info &&
										info[0].media.additional &&
										info[0].media.additional[0].attributes.url
									}
								/>
							</div>
						</ContainerFluid>
					</Section>
				)}
				<Section classes='o-details -padding-lg' data-theme='light'>
					<ContainerFluid>
						<div className='o-details_left'>
							Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi,
							in?
						</div>
						<div className='o-details_right'>
							<div className='about'>
								<Fade bottom>
									<ReactMarkdown
										className='o-h3'
										children={"About the Company"}
									/>
								</Fade>
								<Fade bottom>
									<p className='o-text -body'>
										Lorem ipsum dolor sit amet consectetur, adipisicing elit.
										Molestiae perspiciatis sint quidem. Suscipit commodi,
										quaerat enim dolorem fugiat quo at blanditiis neque incidunt
										vel ut repellat labore quis eos non nulla qui obcaecati?
										Quibusdam quaerat et itaque! Soluta nobis asperiores,
										blanditiis ducimus adipisci ex exercitationem vero tenetur
										nostrum tempora deserunt?
									</p>
								</Fade>
							</div>
							<div className='work'>
								{/* <Fade bottom cascade> */}
								<Fade bottom>
									<ReactMarkdown className='o-h3' children={"Our Work"} />
								</Fade>
								<Fade bottom>
									<p className='o-text -body'>
										Lorem ipsum dolor sit amet consectetur, adipisicing elit.
										Molestiae perspiciatis sint quidem. Suscipit commodi,
										quaerat enim dolorem fugiat quo at blanditiis neque incidunt
										vel ut repellat labore quis eos non nulla qui obcaecati?
										Quibusdam quaerat et itaque! Soluta nobis asperiores,
										blanditiis ducimus adipisci ex exercitationem vero tenetur
										nostrum tempora deserunt?
									</p>
								</Fade>
								{/* </Fade> */}
							</div>
						</div>
					</ContainerFluid>
				</Section>

				{info && info[0].media.additional && (
					<Section classes='o-additionalMedia -padding-lg' data-theme='light'>
						<ContainerFluid>
							<ProjectGrid variant='media' items={info[0].media.additional} />
						</ContainerFluid>
					</Section>
				)}

				<Next color={accentColor[1]} nextPost={info && info.nextPost} />
			</div>
		</>
	);
}

export default SingleProjectPage;
