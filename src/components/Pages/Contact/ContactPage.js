import React, { useContext } from "react";
import { DataContext } from "../../../context/Context";
import ContainerFluid from "../../Containers/ContainerFluid";
import Section from "../../Containers/Section";
import ColorBlobs from "../../Drawings/ColorBlobs";
import Figure from "../../Figure/Figure";

function ContactPage() {
	const { bio } = useContext(DataContext);

	console.log(bio);

	return (
		<div className='o-page o-page_contact'>
			<Section classes='o-hero'>
				<h1 className='o-h1 -split -fadeUpChars'>Meet Sammy</h1>
				<ColorBlobs />
			</Section>
			<Section classes='o-textOne'>
				<ContainerFluid>
					<p className='o-text -indent'>
						I believe music is a language of connection and a powerful tool to
						spread waves of change. I founded The Eyes & Ears Agency in January
						2020 during my senior year at Syracuse University, where I studied
						the music business in the Bandier Program. Here, I discovered the
						opportunity to marry my passion for music with my love of social
						impact work.
					</p>
				</ContainerFluid>
			</Section>
			<Section classes='o-intro -padding-lg'>
				<ContainerFluid classes='-flex -stretchX -align-end -justify-center -row-reverse'>
					<div className='o-intro_right'>
						<div className='o-intro_image'>
							<Figure src={bio && bio.image.src} alt='' />
						</div>
					</div>
					<div className='o-intro_left'>
						<p className='o-text'>
							I have held several roles working in both the non-profit (Global
							Inheritance) and for-profit (Nvak Collective) sectors of the
							industry, amplifying creative activism and supporting the careers
							of female, non-binary, and LGBTQ+ artists in emerging markets
							respectively. I bring both these perspectives to my work at The
							Eyes & Ears Agency, creating social impact partnerships that are
							scalable, impactful, and educational.
						</p>
					</div>
				</ContainerFluid>
				<ContainerFluid classes='o-intro2 -padding-lg'>
					<p className='o-text'>
						Dedicated to increasing visibility and accessibility to social
						impact resources in the music and entertainment industries, I
						believe the cultural and philanthropic impact that can be achieved
						from harnessing the power of music is not being sufficiently
						leveraged. I am humbled to play a role in the new generation of
						artist-activists who are directly engaged in the change they want to
						see in the world.
					</p>
				</ContainerFluid>
			</Section>
			{/* <Section classes='o-bio -padding-lg' data-theme='light'>
				<ContainerFluid classes='-stretchY '>
					<div className='o-container_inner'>
						<h1 className='o-h1 -text-center -padding-bottom-lg -split -fadeUpChars'>
						Words from the Founder
					</h1>

						<div className='o-bio_main -stretchX -flex -align-start -justify-between'>
							<Figure
								classes=' -figure-zoom -frame-reveal'
								alt={bio && bio.image.alt}
								src={bio && bio.image.src}
								width={"40vw"}
								maxWidth={"500px"}
								maxHeight={"500px"}
								height={"40vw"}
							/>
								<div className='o-bio_content'>
							<Fade bottom>
								<ReactMarkdown className='o-text' children={bio && bio.body} />
							</Fade>
						</div>
						</div>
					
					</div>
				</ContainerFluid>
			</Section> */}
		</div>
	);
}

export default ContactPage;
