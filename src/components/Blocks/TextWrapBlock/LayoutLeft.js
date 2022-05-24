import React from "react";
import Markdown from "../../Markdown/Markdown";
import Cta from "../../Link/Cta";

function LayoutLeft({ text, callToAction }) {
	return (
		<div className='TextWrapBlock_LayoutLeft'>
			<Markdown paragraphClasses={"mt-5"}>{text}</Markdown>
			<div className='mt-10 flex justify-end md:justify-start '>
				{callToAction && (
					<Cta
						target={
							callToAction.OpenNewTab && !callToAction.URL.includes("mailto:")
								? "_blank"
								: "_self"
						}
						href={callToAction.URL}
					>
						{callToAction.ButtonText}
					</Cta>
				)}
			</div>
		</div>
	);
}

export default LayoutLeft;
