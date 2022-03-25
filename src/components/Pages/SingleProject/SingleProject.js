import gsap from "gsap";
import $ from "jquery";
import React, {
	useContext,
	useEffect,
	useLayoutEffect,
	useMemo,
	useRef,
	useState,
} from "react";
import { useLocomotiveScroll } from "react-locomotive-scroll";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { DataContext } from "../../../App";
import { shuffleColors } from "../../../helpers/shuffleColors";
import ContainerFluid from "../../Containers/ContainerFluid";
import Section from "../../Containers/Section";
import ImageRevealer from "../../ImageRevealer/ImageRevealer";
import Link from "../../Link/Link";
import Arrow from "../../Vector/Arrow";

function SingleProject({ location, transitioning, toggleTransitioning }) {
	const data = useContext(DataContext);

	const [param, setParam] = useState(null);
	const [info, setInfo] = useState(null);
	const textWrapper = useRef(null);
	const heroImage = useRef(null);
	const revealer = useRef(null);
	const tl = useRef(gsap.timeline());
	const scroll = useLocomotiveScroll();
	const mobile = window.matchMedia("(max-width: 820px)");

	const accentColor = useMemo(() => shuffleColors(), []);
	useMemo(() => {
		if (scroll && scroll.scroll) {
			scroll && scroll.scroll && scroll.scroll.scrollTo(0, 0)
		} else {
			window.scrollTo(0, 0)
		}
	}, [scroll]);

	useLayoutEffect(() => {

		
		const desktopTimeline = () => {
			const lines = $(textWrapper.current).find(".c-line");
			tl.current
				.set(heroImage.current, { opacity: 0 })
				.set(revealer.current, { transition: "none" })

				.to(lines, {
					y: 0,
					opacity: 1,
					ease: "power3.out",
					duration: 1,
					stagger: 0.1,
				})
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
				)

				.to(
					revealer.current,
					{
						scaleY: 1,
						duration: 2,
						ease: "expo.inOut",
					},
					1.5
				)
				.to(
					revealer.current,
					{
						scaleX: 1,
						duration: 2,
						ease: "expo.inOut",
					},
					1.5
				)
				.to(heroImage.current, { opacity: 1, duration: 2 }, 1.4);

			return tl.current;
		};

		const mobileTimeline = () => {
			const lines = $(textWrapper.current).find(".c-line");
			console.log(lines)
			tl.current
				.set(heroImage.current, { opacity: 0 })
				.set(revealer.current, { transition: "none" })

				.to(lines, {
					y: 0,
					opacity: 1,
					ease: "power3.out",
					duration: 1,
					stagger: 0.1,
				})
				.to(heroImage.current, { opacity: 1, duration: 1 }, 0.5);
			return tl.current;
		};

		setTimeout(() => {
			if (mobile.matches) {
				mobileTimeline();
			} else {
				desktopTimeline();
			}
		}, 400);
	}, []);

	// useEffect(() => {

	// 	//Ensure page scrolls to top on location change
	// 	window.scrollTo(0, 0);

	// 	scroll && scroll.scroll && scroll.scroll.scrollTo(0, { duration: 0, disableLerp: true });
	// }, [location, scroll]);

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
			// setInfo(data.posts.filter(x => x.id === param));
			const match = data.posts.filter(x => x.id == param);
			const nextPost = data.posts.filter(
				x =>
					x.id ==
					(parseInt(param) - 1 == 0 ? data.posts.length : parseInt(param) - 1)
			);

			setInfo({ ...match, nextPost: nextPost });
		}
	}, [data, location, param]);

	return (
		<div className='o-page o-single-project'>
			<Section data-theme='light' classes='o-hero'>
				<ContainerFluid>
					<div className='o-container_inner'>
						{/* <Section classes='o-hero -fullHeight'>
					<div className='o-hero_text'>
						<h2 className='o-h2 -bold -text-orange'>{info && info[0].title}</h2>
						<h3 className='o-h3'>{info && info[0].subtitle}</h3>
					</div>

					<div className='o-hero_image-wrapper'>
						<img
							src={info && info[0].media.featureImage.url}
							alt={info && info[0].media.featureImage.altText}
						/>
					</div>
				</Section> */}

						<div className='o-hero_text u-desktop-js-anim' ref={textWrapper}>
							<h3 className='o-h3 -split' style={{ color: accentColor }}>
								{info && info[0].title}
							</h3>
							<h2 className='o-h2 -bold -split' style={{ color: accentColor }}>
								{info && info[0].subtitle}
							</h2>
							{/* <h3 className='o-h3'>{info && info[0].subtitle}</h3> */}
						</div>
						<div className='o-hero_image media-reveal' ref={heroImage}>
							<ImageRevealer ref={revealer} />
							<img
								src={info && info[0].media.featureImage.url}
								alt={info && info[0].media.featureImage.altText}
							></img>
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
					<div className='o-overview_left'>
						<ReactMarkdown className='o-h3' children={info && info[0].goal} />
					</div>
					<div className='o-overview_right'>
						<ReactMarkdown
							className='o-text -body'
							children={info && info[0].about1}
						/>
					</div>
				</ContainerFluid>
			</Section>
			{info && info[0].media.additional && (
				<Section data-theme='light' classes='o-feature -padding-bottom-lg'>
					<ContainerFluid>
						<div className='o-feature_item' data-scroll>
							<div className='item-revealer'></div>
							<img
								src={
									info &&
									info[0].media.additional &&
									info[0].media.additional[0].attributes.url
								}
							></img>
						</div>
					</ContainerFluid>
				</Section>
			)}
			<Section classes='o-details -padding-lg' data-theme="dark">
				<ContainerFluid>
					<div className='o-details_left'>
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi, in?
					</div>
					<div className='o-details_right'>
						<div className='about'>
							<ReactMarkdown className='o-h3' children={"About the Company"} />

							<p className='o-text -body'>
								Lorem ipsum dolor sit amet consectetur, adipisicing elit.
								Molestiae perspiciatis sint quidem. Suscipit commodi, quaerat
								enim dolorem fugiat quo at blanditiis neque incidunt vel ut
								repellat labore quis eos non nulla qui obcaecati? Quibusdam
								quaerat et itaque! Soluta nobis asperiores, blanditiis ducimus
								adipisci ex exercitationem vero tenetur nostrum tempora
								deserunt?
							</p>
						</div>
						<div className='work'>
							{" "}
							<ReactMarkdown className='o-h3' children={"Our Work"} />
							<p className='o-text -body'>
								Lorem ipsum dolor sit amet consectetur, adipisicing elit.
								Molestiae perspiciatis sint quidem. Suscipit commodi, quaerat
								enim dolorem fugiat quo at blanditiis neque incidunt vel ut
								repellat labore quis eos non nulla qui obcaecati? Quibusdam
								quaerat et itaque! Soluta nobis asperiores, blanditiis ducimus
								adipisci ex exercitationem vero tenetur nostrum tempora
								deserunt?
							</p>
						</div>
					</div>
				</ContainerFluid>
			</Section>
			{/* <Section classes='o-media' data-theme='light'>
				<ContainerFluid>
					<ProjectGrid
						items={info && info[0].media.additional}
						variant='media'
					/>
				</ContainerFluid>
			</Section> */}
			<Section classes='o-next'>
				<ContainerFluid>
					<Link
						classes={`-stretchX -block -stretchY -padding-lg -hover-underline`}
						isRouterLink
						href={info && info.nextPost && `/projects/${info.nextPost[0].id}`}
					>
						<div className='c-link_inner'>
							<Arrow />
							<div className='o-next_title o-h3 -underline-label -underline-label-dark'>
								<span className='label'>
									{info && info.nextPost && info.nextPost[0].title}
								</span>
							</div>
							<div className='o-next_subtitle o-h3 -underline -underline-dark'>
								{info && info.nextPost && info.nextPost[0].subtitle}
							</div>
						</div>
					</Link>
				</ContainerFluid>
			</Section>
		</div>
	);
}

export default SingleProject;
