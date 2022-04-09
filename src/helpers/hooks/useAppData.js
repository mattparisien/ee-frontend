import axios from "axios";
import { useEffect, useState } from "react";
import {
	formatAbout,
	formatPosts,
	formatSteps,
	formatTestimonials,
} from "../formatData";

export default function useAppData(scrollRef) {
	const navItems = [
		{
			name: "Home",
			path: "/",
		},
		{
			name: "Projects",
			path: "/projects",
		},
		{
			name: "About",
			path: "/about",
		},
	];

	//App state
	const [transitioning, setTransitioning] = useState(true);

	const [state, setState] = useState({
		user: {
			isVisitor: true,
		},
		search: {
			currentResults: null,
		},
		scroller: null,
		headerColor: "dark",
		sidebar: {
			showSidebar: false,
			hasShown: false,
		},
		cursor: "normal",
		isScrollLock: false,
		data: {},
		pending: true,
	});

	const getSearchResults = searchTerm => {
		const projects = state.data.posts;

		return projects.filter(
			project =>
				project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
				project.subtitle.toLowerCase().includes(searchTerm.toLowerCase())
		);
	};

	const setSearch = searchTerm => {
		setState(prev => ({
			...prev,
			search: { ...prev.search, currentResults: getSearchResults(searchTerm) },
		}));
	};

	const changeCursor = value => {
		setState(prev => ({ ...prev, cursor: value }));
	};

	const togglePending = () => {
		setState(prev => ({ ...prev, pending: !prev.pending }));
	};

	//Fetch essential data
	useEffect(() => {
		const basePath = process.env.REACT_APP_API_URL;

		const fetchURL = url => axios.get(url);

		const urls = [
			`${basePath}/projects?populate=*`,
			`${basePath}/steps`,
			`${basePath}/about`,
			`${basePath}/testimonials`,
			`${basePath}/footer`,
			`${basePath}/bio?populate=*`,
			`${basePath}/socials`,
			`${basePath}/pages`,
		];

		const promiseArray = [...urls].map(fetchURL);

		Promise.all(promiseArray)
			.then(data => {
				const formattedPosts = formatPosts([...data[0].data.data]);
				const formattedSteps = formatSteps([...data[1].data.data]);
				const formattedAbout = formatAbout(data[2].data.data);
				const formattedTestimonials = formatTestimonials(data[3].data.data);
				const formattedFooter = data[4].data.data.attributes;
				const formattedBio = data[5].data.data.attributes;
				const formattedSocials = data[6].data.data.map(account => ({
					id: account.id,
					name: account.attributes.Name,
					url: account.attributes.Url,
				}));
				const formattedPages = data[7].data.data.map(page => ({
					id: page.id,
					name: page.attributes.Title,
					heading: page.attributes.Heading,
				}));

				setState(prev => ({
					...prev,
					data: {
						...prev.data,
						pages: formattedPages,
						about: formattedAbout,
						posts: formattedPosts,
						steps: formattedSteps,
						testimonials: formattedTestimonials,
						footer: { ...formattedFooter },
						bio: {
							body: formattedBio.Body,
							image: {
								src: formattedBio.SelfImage.data.attributes.url,
								alt: formattedBio.SelfImage.data.attributes.alternativeText,
							},
						},
						socials: formattedSocials,
					},
				}));
			})
			.catch(err => console.log(err))
			.finally(() => togglePending());
	}, []);

	return {
		state,
		setState,
		navItems,
		transitioning,
		setTransitioning,
		cursor: state.cursor,
		changeCursor,
		pending: state.pending,

		search: state.search,
		setSearch,
	};
}
