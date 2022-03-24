import * as React from "react";

const Quotation = props => (
	<div className='c-quotation'>
		<svg
			xmlns='http://www.w3.org/2000/svg'
			viewBox='0 0 86.26 59.87'
			{...props}
		>
			<path d='M28.17.08c.76-.19 1.24-.05 1.44.43.19.48 0 .91-.57 1.29-5.37 1.72-10.06 4.17-14.08 7.33s-6.03 6.57-6.03 10.2c0 2.87 1.19 4.93 3.59 6.18 2.39 1.25 6.27 2.35 11.64 3.31 10.73 2.3 16.1 7.28 16.1 14.95 0 4.41-1.58 8.19-4.74 11.35s-7.43 4.74-12.79 4.74c-6.71 0-12.17-2.3-16.38-6.9C2.11 48.37 0 42.33 0 34.86c0-9.2 2.73-16.67 8.19-22.42C13.65 6.69 20.31 2.57 28.17.08Zm46.02 0c.76-.19 1.24-.05 1.44.43.19.48 0 .91-.57 1.29C69.69 3.52 65 5.97 60.98 9.13s-6.04 6.57-6.04 10.2c0 2.87 1.19 4.93 3.59 6.18s6.28 2.35 11.64 3.31c10.73 2.3 16.1 7.28 16.1 14.95 0 4.41-1.58 8.19-4.74 11.35s-7.43 4.74-12.79 4.74c-6.52 0-11.93-2.44-16.24-7.33s-6.47-11.07-6.47-18.54C46.02 17.52 55.41 6.21 74.19.08Z' />
		</svg>
	</div>
);

export default Quotation;
