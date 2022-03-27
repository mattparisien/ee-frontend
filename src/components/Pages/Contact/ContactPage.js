import React, { useContext } from "react";
import { DataContext } from "../../../App";
import Section from "../../Containers/Section";
import ContainerFluid from "../../Containers/ContainerFluid";
import Figure from "../../Figure/Figure";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

function ContactPage() {
	const { bio } = useContext(DataContext);

	return (
		<div className='o-page o-page_contact'>
			<Section classes='o-bio -padding-lg' data-theme='light'>
				<ContainerFluid classes='-stretchY'>
					<div className='o-container_inner'>
						<h1 className='o-h1'>
							Letter from <br></br>the <em>Founder.</em>
						</h1>
						<div className='o-bio_content'>
							<ReactMarkdown className='o-text' children={bio && bio.body} />
						</div>

						{/* <Figure
							alt={bio && bio.image.alt}
							src={bio && bio.image.src}
							width={"34vw"}
							maxWidth={"500px"}
							maxHeight={"500px"}
							height={"34vw"}
						/> */}
						{/* <p className='o-text'>{bio && bio.body}</p> */}
					</div>
				</ContainerFluid>
				<hr></hr>
			</Section>
			<Section>
						<Figure
							alt={bio && bio.image.alt}
							src={bio && bio.image.src}
							width={"34vw"}
							maxWidth={"500px"}
							maxHeight={"500px"}
							height={"34vw"}
						/>
			</Section>
			<Section classes='o-bio -padding-lg' data-theme='light'>
				<ContainerFluid classes='-stretchY '>
					<div className='o-container_inner'>
						{/* <h1 className='o-h1'>
						Letter from <br></br>the <em>Founder</em>
					</h1> */}
						<div className='o-bio_heading'>
							<h1 className='o-h1'>
								Letter from <em>the founder.</em>
							</h1>
							<Figure
								alt={bio && bio.image.alt}
								src={bio && bio.image.src}
								width={"40vw"}
								maxWidth={"500px"}
								maxHeight={"500px"}
								height={"40vw"}
							/>
						</div>
						<div className='o-bio_content'>
							<ReactMarkdown className='o-text' children={bio && bio.body} />
						</div>
					</div>
				</ContainerFluid>
			</Section>
		</div>
	);
}

export default ContactPage;
