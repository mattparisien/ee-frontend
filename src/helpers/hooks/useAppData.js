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

	const setHeaderColor = color => {
		setState(prev => ({ ...prev, headerColor: color }));
	};

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
		headerColor: state.headerColor,
		setHeaderColor
	};
}
