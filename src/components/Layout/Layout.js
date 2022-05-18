import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import DropdownMenu from "../DropdownMenu/DropdownMenu";

function Layout({ children }) {
	return (
		<div className='Layout'>
			<Header />
			<DropdownMenu />
			<main className='main pt-[69px] bg-light'>{children}</main>
			<Footer />
		</div>
	);
}

export default Layout;
