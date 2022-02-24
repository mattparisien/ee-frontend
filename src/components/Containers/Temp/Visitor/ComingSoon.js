import React from "react";
import Button from "../../../Button/Button";

function ComingSoon() {
	return (
		<>
			<div className="coming-soon-text">Coming Soon</div>
			<Button variant='contained' color='dark'>
				<a
					href='mailto:sammy@eyesandearsagency.com'
					target='_blank'
					rel='noreferrer'
				>
					Get in touch
				</a>
			</Button>
		</>
	);
}

export default ComingSoon;
