import React, { useContext, useEffect, useState } from "react";
import { setQuaternionFromProperEuler } from "three/src/math/MathUtils";
import { shuffleColors } from "../../../helpers/shuffleColors";
import ContainerFluid from "../../Containers/ContainerFluid";
import Section from "../../Containers/Section";
import { DataContext } from "../../Containers/Temp/Authenticated";
import Arrow from "../../Vector/Arrow";
import Link from "../../Link/Link";
import { useLocomotiveScroll } from "react-locomotive-scroll";

function SingleProject({ location }) {
	const data = useContext(DataContext);

	const [param, setParam] = useState(null);
	const [info, setInfo] = useState(null);
	const [themeColor, setThemeColor] = useState(null);
	const scroll = useLocomotiveScroll();

	useEffect(() => {
		setThemeColor(shuffleColors());
	}, []);

	useEffect(() => {

		//Ensure page scrolls to top on location change
		window.scrollTo(0, 0);

		scroll && scroll.scroll && scroll.scroll.scrollTo(0, { duration: 0, disableLerp: true });
	}, [location, scroll]);

	useEffect(() => {
		//Find query param
		if (!param) {
			let param = "";
			let counter = 0;
			for (let i = 0; i < location.pathname.length; i++) {
				if (location.pathname[i] === "/") {
					counter += 1;

					if (counter > 1) {
						console.log(" in here");
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
			// console.log('next post...', nextPost)
			console.log(nextPost);

			setInfo({ ...match, nextPost: nextPost });
		}
	}, [data, location, param]);

	useEffect(() => {
		console.log(info);
	}, [info]);

	return (
		<div className='o-page o-single-project'>
			<ContainerFluid classes={`-bg-${themeColor}`}>
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
				<Section classes={`o-hero-2 -bg-${themeColor}`}>
					<div className='o-hero_text'>
						<h3 className='o-h3'>{info && info[0].title}</h3>
						<h2 className='o-h2 -bold'>{info && info[0].subtitle}</h2>
						{/* <h3 className='o-h3'>{info && info[0].subtitle}</h3> */}
					</div>
					{/* 				
					<div className='o-hero_image-wrapper-2'>
						<img
							src={info && info[0].media.featureImage.url}
							alt={info && info[0].media.featureImage.altText}
						/>
					</div> */}
				</Section>
			</ContainerFluid>
			<ContainerFluid classes='-bg-light'>
				<div className={`half-bg -bg-${themeColor}`}></div>
				<div className='o-hero_image-wrapper-2'>
					<img
						src={info && info[0].media.featureImage.url}
						alt={info && info[0].media.featureImage.altText}
					/>
				</div>
			</ContainerFluid>
			<ContainerFluid classes='o-spacer -bg-light'></ContainerFluid>
			<ContainerFluid classes='o-info -bg-light'>
				<Section classes='o-info_overview -padding-lg'>
					<div className='o-info_overview_inner'>
						<div className='o-info_overview_intro'>
							<div className='o-info_line'></div>
							<h3 className='o-h3 -bold'>Overview</h3>
							<p className='o-text'>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
								quasi sit quia eligendi molestiae repellendus reiciendis
								delectus debitis, id itaque voluptas incidunt adipisci sequi est
								impedit rem!
							</p>
							<p className='o-text'>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
								quasi sit quia eligendi molestiae repellendus reiciendis
								delectus debitis, id itaque voluptas incidunt adipisci sequi est
								impedit rem!
							</p>
						</div>
						<div className='o-info_overview_index'>
							<h3 className='o-h3'>Services</h3>
							<h3 className='o-h3'>Personality</h3>
							<h3 className='o-h3'>Typefaces</h3>
							<h3 className='o-h3'>Completed</h3>
						</div>
					</div>
				</Section>
				<Section classes='o-info_media -padding-lg'>
					<div className='o-info_image-wrapper'>
						<img
							src={
								info &&
								info[0].media.additional &&
								info[0].media.additional[0].attributes.url
							}
							alt={
								info &&
								info[0].media.additional &&
								info[0].media.additional[0].attributes.alternativeText
							}
						/>
					</div>
				</Section>
			</ContainerFluid>
			<ContainerFluid classes='-bg-dark'>
				<Section classes='o-info_about -padding-lg'>
					<div>
						<h4 className='o-h4 -bold'>About the Artist</h4>
						<p className='o-text'>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
							labore delectus error at vero! Molestias ullam distinctio dolore
							fuga laudantium ducimus nam, alias et explicabo facilis illo sed!
							Consequatur facilis, quis eos dolorum aliquam mollitia nemo
							perspiciatis, asperiores, illum commodi in.
						</p>
					</div>
					<div>
						<h4 className='o-h4 -bold'>About the the Company</h4>
						<p className='o-text'>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
							labore delectus error at vero! Molestias ullam distinctio dolore
							fuga laudantium ducimus nam, alias et explicabo facilis illo sed!
							Consequatur facilis, quis eos dolorum aliquam mollitia nemo
							perspiciatis, asperiores, illum commodi in.
						</p>
					</div>
				</Section>
			</ContainerFluid>

			<Link
				classes='o-next -stretchX -stretchY -padding-lg -bg-dark'
				isRouterLink
				href={info && info.nextPost && `/projects/${info.nextPost[0].id}`}
			>
				<Arrow />
				<div className='o-next_title'>
					{info && info.nextPost && info.nextPost[0].title}
				</div>
			</Link>
		</div>
	);
}

export default SingleProject;
