import classNames from "classnames";
import React, { useState } from "react";
import SubmitButton from "./SubmitButton";

function ContactForm() {
	const inputClasses = classNames(
		"bg-dark border-b-[1px] border-neutral-400 placeholder-neutral-400 focus:outline-none text-xl pb-2 flex-1 relative",
		{}
	);

	const fieldMap = [
		[
			{
				name: "name",
				placeholder: "Name",
				element: "input",
			},
			{
				name: "company",
				placeholder: "Company",
				element: "input",
			},
		],
		[
			{
				name: "email",
				placeholder: "Email",
				element: "input",
			},
			{
				name: "city",
				placeholder: "City",
				element: "input",
			},
		],
		[
			{
				name: "message",
				placeholder: "Message",
				element: "textArea",
			},
		],
	];

	const defaultState = fieldMap.flat().reduce(
		(obj, item) =>
			Object.assign(obj, {
				[item.name]: {
					value: "",
				},
			}),
		{}
	);

	const [values, setValues] = useState(defaultState);

	const handleChange = e => {
		const value = e.target.value;
		setValues(prevState => ({
			...prevState,
			[e.target.name]: {
				value: value,
			},
		}));
	};

	const handleSubmit = async e => {
		e.preventDefault();
		const formData = values;
		fetch("/api/mail", {
			method: "post",
			body: JSON.stringify(formData),
		});
	};

	return (
		<form
			className='ContactForm flex justify-center flex-wrap ml-auto flex-1'
			onSubmit={handleSubmit}
		>
			{fieldMap.map(fieldGroup => (
				<div className='FieldGroup  mt-5 flex flex-[100%]'>
					{fieldGroup.map(field => (
						<div className='FieldWrapper mr-4 flex-[100%] flex relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-px after:bg-light after:scale-x-0 after:origin-left after:transition after:duration-[800ms] after:ease-[cubic-bezier(0.35, 0.755, 0.42, 0.95)] hover:after:scale-x-100 '>
							{React.createElement(field.element, {
								className: inputClasses,
								placeholder: field.placeholder,
								name: field.name,
								value: values[field.name].value,
								required: true,
								onChange: handleChange,
							})}
						</div>
					))}
				</div>
			))}
			<SubmitButton />
		</form>
	);
}

export default ContactForm;
