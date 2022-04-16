import axios from "axios";
import { useEffect, useState } from "react";
import {
	formatAbout,
	formatPosts,
	formatSteps,
	formatTestimonials,
} from "../formatData";
import getData from "../getData";

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
		{
			name: "Demo",
			path: "/temp",
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
		data: {
			isLoaded: false,
		},
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

	const setDataLoaded = () => {
		setState(prev => ({ ...prev, data: { ...prev.data, isLoaded: true } }));
	};

	//Fetch essential data
	useEffect(() => {
		const endpoints = [
			`/projects?populate=*`,
			`/steps`,
			`/about`,
			`/testimonials`,
			`/footer`,
			`/bio?populate=*`,
			`/socials`,
			`/pages`,
		];

		getData(endpoints)
			.then(final => {
				setState(prev => ({ ...prev, data: { ...prev.data, ...final } }));
			})
			.finally(() => setDataLoaded(true));
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
