import classNames from "classnames";
import React, { useEffect, useState } from "react";
import SubmitButton from "./SubmitButton";

function ContactForm() {
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
	const defaultDirtyState = fieldMap.flat().reduce(
		(obj, item) =>
			Object.assign(obj, {
				[item.name]: {
					dirty: false,
				},
			}),
		{}
	);

	const [dirtyInputs, setDirtyInputs] = useState(defaultDirtyState);

	useEffect(() => {
		console.log(dirtyInputs);
	}, [dirtyInputs]);

	const inputClasses = classNames(
		"bg-dark border-b-[1px] border-neutral-400 placeholder-neutral-400 hover:placeholder-light focus:outline-none text-xl pb-2 flex-1 relative",
		{}
	);

	const defaultValueState = fieldMap.flat().reduce(
		(obj, item) =>
			Object.assign(obj, {
				[item.name]: {
					value: "",
				},
			}),
		{}
	);

	const [values, setValues] = useState(defaultValueState);

	const handleChange = e => {
		//Determine if dirty
		if (!dirtyInputs[e.target.name].dirty && e.target.value !== "") {
			setDirtyInputs(prev => ({
				...prev,
				[e.target.name]: {
					dirty: true,
				},
			}));
		} else if (dirtyInputs[e.target.name].dirty && e.target.value === "") {
			setDirtyInputs(prev => ({
				...prev,
				[e.target.name]: {
					dirty: false,
				},
			}));
		}

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
			className='ContactForm flex justify-center flex-wrap ml-auto flex-1 mt-10 lg:mt-0'
			onSubmit={handleSubmit}
		>
			{fieldMap.map(fieldGroup => (
				<div className='FieldGroup  mt-5 flex flex-[100%]'>
					{fieldGroup.map(field => (
						<div className='FieldWrapper font-walsheim group mr-4 flex-[100%] flex relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-px after:bg-light after:scale-x-0 after:origin-left after:transition after:duration-[800ms] after:ease-[cubic-bezier(0.35, 0.755, 0.42, 0.95)] hover:after:scale-x-100 '>
							{!dirtyInputs[field.name].dirty && (
								<label className='absolute text-xl group-hover:text-light z-[2] left-0 text-neutral-400 transition-colors duration-[800ms] ease-[cubic-bezier(.215,.61,.355,1)] top-0 text-light pointer-events-none'>
									{field.placeholder}
								</label>
							)}
							{React.createElement(field.element, {
								className: inputClasses,
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
