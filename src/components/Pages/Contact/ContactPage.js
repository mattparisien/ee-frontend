import React, { useContext } from "react";
import { DataContext } from "../../../App";
import Section from "../../Containers/Section";
import ContainerFluid from "../../Containers/ContainerFluid";
import Figure from "../../Figure/Figure";
import Fade from "react-reveal/Fade";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

function ContactPage() {
	const { bio } = useContext(DataContext);

	return (
		<div className='o-page o-page_contact'>
			<Section classes='o-bio -padding-lg' data-theme='light'>
				<ContainerFluid classes='-stretchY '>
					<div className='o-container_inner'>
						<h1 className='o-h1 -text-center -padding-bottom-lg'>
						Words from <em>Founder</em>
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
			</Section>
		</div>
	);
}

export default ContactPage;
