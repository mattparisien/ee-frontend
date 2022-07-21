import classNames from "classnames";
import React, { useState } from "react";
import SubmitButton from "./SubmitButton";

function ContactForm() {
	const inputClasses = classNames(
		"bg-dark border-b-[1px] border-neutral-400 placeholder-neutral-400 focus:outline-none text-xl pb-2 mr-4 flex-1 relative",
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
				name: "somethingelse",
				placeholder: "Something else",
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
			className='ContactForm mt-40 flex justify-center flex-wrap md:w-2/3 ml-auto'
			onSubmit={handleSubmit}
		>
			{fieldMap.map(fieldGroup => (
				<div className='FieldGroup  mt-5 flex flex-[100%]'>
					{fieldGroup.map(field =>
						React.createElement(field.element, {
							className: inputClasses,
							placeholder: field.placeholder,
							name: field.name,
							value: values[field.name].value,
							required: true,
							onChange: handleChange,
						})
					)}
				</div>
			))}

			<SubmitButton />
		</form>
	);
}

export default ContactForm;
