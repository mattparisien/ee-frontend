import classNames from "classnames";
import React, { useState } from "react";
import Form from "./Form";
import SuccessMessage from "./SuccessMessage";

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

	const defaultValueState = fieldMap.flat().reduce(
		(obj, item) =>
			Object.assign(obj, {
				[item.name]: {
					value: "",
				},
			}),
		{}
	);

	const [dirtyInputs, setDirtyInputs] = useState(defaultDirtyState);
	const [values, setValues] = useState(defaultValueState);
	const [success, setSuccess] = useState(false);

	const inputClasses = classNames(
		"bg-transparent border-b-[1px] border-neutral-400 placeholder-neutral-400 hover:placeholder-light focus:outline-none text-xl pb-2 flex-1 relative",
		{}
	);

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
		})
			.then(response => response.json())
			.then(success => setSuccess(true));
	};

	return !success ? (
		<Form
			inputClasses={inputClasses}
			fieldMap={fieldMap}
			handleChange={handleChange}
			handleSubmit={handleSubmit}
			dirtyInputs={dirtyInputs}
			values={values}
		/>
	) : (
		<SuccessMessage />
	);
}

export default ContactForm;
