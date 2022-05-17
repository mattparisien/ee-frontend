import React from "react";
import Header from "../Header/Header";
import Context from "../../contexts/Context";

function Layout({ children }) {
	return (
		<Context>
			<div className='Layout'>
				<Header />
				<main className='main'>{children}</main>
			</div>
		</Context>
	);
}

export default Layout;
