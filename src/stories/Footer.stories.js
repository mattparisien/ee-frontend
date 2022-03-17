import Footer from "../components/Footer/Footer";


export default {
	title: "Footer",
	component: Footer,
};

export const Desktop = () => {
	
const navItems = [
	{
		name: "About",
		path: "/",
	},
	{
		name: "Projects",
		path: "/projects",
	},
	{
		name: "Connect",
		path: "/contact",
	},
];
  return <Footer navItems={navItems}/>
};
