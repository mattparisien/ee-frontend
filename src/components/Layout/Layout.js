import React from "react";
import Header from "../Header/Header";
// import Context from "../../../contexts/Context";
import Footer from "../Footer/Footer";

function Layout({ children }) {
	return (
		<div className='Layout'>
			<Header />
			<main className='main'>{children}</main>
			<Footer />
		</div>
	);
}

export default Layout;
