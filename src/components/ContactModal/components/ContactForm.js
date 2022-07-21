import React from "react";
import classNames from "classnames";
import Container from "../../Containers/ContainerFluid";
import SubmitButton from "./SubmitButton";

function ContactForm() {
	const inputClasses = classNames(
		"bg-dark border-b-[1px] border-neutral-400 placeholder-neutral-400 focus:outline-none text-xl pb-2 mr-4 flex-1 relative",
		{}
	);

	const handleSubmit = () => {

	}

	return (
		<Container maxWidth='small' disableGutters>
			<form className='ContactForm mt-40 flex justify-center flex-wrap md:w-2/3 ml-auto' onSubmit={handleSubmit}>
				<div className='flex flex-1'>
					<input placeholder='Name' className={inputClasses} />
					<input placeholder='Company' className={inputClasses} />
				</div>
				<div className='flex mt-5 flex-1'>
					<input placeholder='Email' className={inputClasses} />
					<input placeholder='Something else' className={inputClasses} />
				</div>
				<div className='mt-5 flex flex-1'>
					<textArea placeholder='Message' className={inputClasses} />
				</div>
				<SubmitButton/>
			</form>
		</Container>
	);
}

export default ContactForm;
