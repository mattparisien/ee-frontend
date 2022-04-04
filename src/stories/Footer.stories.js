import Footer from "../components/Footer/Footer";

export default {
	title: "Footer",
	component: Footer,
};

export const Desktop = () => {
	const navItems = [
		{
			name: "About",
			href: "/",
		},
		{
			name: "Projects",
			href: "/projects",
		},
		{
			name: "Connect",
			href: "/contact",
		},
	];
	return <Footer navItems={navItems} />;
};
