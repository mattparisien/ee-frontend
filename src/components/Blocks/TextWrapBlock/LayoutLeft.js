import React from "react";
import Markdown from "../../Markdown/Markdown";
import Cta from "../../Link/Cta";

function LayoutLeft({ text, callToAction }) {
	return (
		<div className='TextWrapBlock_LayoutLeft'>
			<Markdown
				variantMap={{
					p: "small",
				}}
			>
				{text}
			</Markdown>
			{callToAction && (
				<Cta
					target={
						callToAction.openNewTab && !callToAction.url.includes("mailto:")
							? "_blank"
							: "_self"
					}
					href={callToAction.url}
				>
					{callToAction.buttonText}
				</Cta>
			)}
		</div>
	);
}

export default LayoutLeft;
