import React, { useState } from "react";
import { StyledCookieBar } from "./styles";
import { Paragraph } from "../index";

function CookieBar() {
	const [isClosed, setIsClosed] = useState(false);

	return (
		<StyledCookieBar className='cookie-bar'>
			<p>
				{" "}
				We use cookies and similar technologies to enhance site navigation,
				analyze site usage, assist our marketing efforts and allow you to share
				our content on your social networks. By continuing to use this website,
				you agree to these conditions of use. For more information about these
				technologies and their use on this website, please consult our Cookie
				Policy.
			</p>
      <div className="user-action-wrapper">
        <button>Accept</button>
        <button>Refuse</button>
      </div>
		</StyledCookieBar>
	);
}

export default CookieBar;
