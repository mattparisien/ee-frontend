import React from "react";

function SubmitButton() {

	return (
		<button
			className='SubmitButton flex-[100%] flex items-center justify-between mt-5 text-light hover:text-yellow-custom transition duration-[800ms] ease-[cubic-bezier(.215,.61,.355,1)]'
			type='submit'
		>
			<span className='font-adieu text-2xl md:text-3xl text-left'>Submit</span>
			<span className='text-2xl md:text-3xl font-semibold'>↗︎</span>
		</button>
	);
}

export default SubmitButton;
