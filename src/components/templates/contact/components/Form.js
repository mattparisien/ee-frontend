import React from "react";
import SubmitButton from "./SubmitButton";

function Form({
	handleSubmit,
	handleChange,
	fieldMap,
	values,
	dirtyInputs,
	inputClasses,
}) {
	return (
		<form
			className='ContactForm flex justify-center flex-wrap ml-auto flex-1 mt-3 sm:mt-10 lg:mt-0'
			onSubmit={handleSubmit}
		>
			{fieldMap.map(fieldGroup => (
				<div className='FieldGroup sm:mt-5 flex flex-col sm:flex-row flex-[100%]'>
					{fieldGroup.map(field => (
						<div className='FieldWrapper mt-5 sm:mt-0 font-walsheim group mr-4 flex-[100%] flex relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-px after:bg-light after:scale-x-0 after:origin-left after:transition after:duration-[800ms] after:ease-[cubic-bezier(0.35, 0.755, 0.42, 0.95)] hover:after:scale-x-100 '>
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

export default Form;
