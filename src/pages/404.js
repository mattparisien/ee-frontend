import React from "react";
import Cta from "../components/Link/Cta";

function Custom404() {
	return (
		<div className='Custom404 h-screen flex flex-col items-center justify-center'>
			<div className='text-9xl' style={{fontFamily: "Kobe Bold"}}>404</div>
      <div className="text-2xl md:text-3xl">Sorry, this page doesn't seem to exist</div>
      <Cta href="/">Back to home</Cta>
		</div>
	);
}

export default Custom404;
