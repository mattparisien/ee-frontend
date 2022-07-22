import React from "react";
import Container from "../../Containers/ContainerFluid";
import Heading from "../../Heading/Heading";
import ContactForm from "./components/ContactForm";

function ContactPage() {
	return (
		<div className='ContactPage bg-dark h-screen pt-40'>
			<Container>
				<div className='sticky z-50 h-full w-full text-light'>
					<div className='flex flex-col lg:flex-row items-start justify-between'>
						<div className='flex-1'>
							<Heading level={1}>Contact Us</Heading>
							<p className='flex-1 text-xl mr-10 mb-5 md:mb-0 mt-5'>
								Let's unlock together the next level of possibilities! Reach
								out.
							</p>
						</div>
						<ContactForm />
					</div>
				</div>
			</Container>
		</div>
	);
}

export default ContactPage;
