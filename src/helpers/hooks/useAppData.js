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
			path: "/contact",
		},
	];

	//App state
	const [transitioning, setTransitioning] = useState(true);

	const [state, setState] = useState({
		user: {
			isVisitor: true,
		},
		search: {
			currentResults: {},
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
		const projects = state.data.projects;

		return projects.filter(project => project.Title.includes(searchTerm));
	};

	const setSearch = searchTerm => {
		setState(prev => ({
			...prev,
			search: { ...prev.search, currentResults: getSearchResults(searchTerm) },
		}));
	};

	const setSearchTerm = searchTerm => {
		setState(pev => ({
			...prev,
			search: { ...prev.search, currentTerm: searchTerm },
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
			// `${basePath}/testimonials`,
			`${basePath}/footer`,
			`${basePath}/bio?populate=*`,
			`${basePath}/socials`,
		];

		const promiseArray = [...urls].map(fetchURL);

		Promise.all(promiseArray)
			.then(data => {
				console.log(data);
				const formattedPosts = formatPosts([...data[0].data.data]);
				const formattedSteps = formatSteps([...data[1].data.data]);
				const formattedAbout = formatAbout(data[2].data.data);
				// const formattedTestimonials = formatTestimonials(data[3].data.data);
				const formattedFooter = data[3].data.data.attributes;
				const formattedBio = data[4].data.data.attributes;
				const formattedSocials = data[5].data.data.map(account => ({
					id: account.id,
					name: account.attributes.Name,
					url: account.attributes.Url,
				}));

				setState(prev => ({
					...prev,
					data: {
						...prev.data,
						about: formattedAbout,
						posts: formattedPosts,
						steps: formattedSteps,
						// testimonials: formattedTestimonials,
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
		cursorState,
	};
}
