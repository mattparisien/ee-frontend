import { useTheme } from "@mui/material";
import { useState } from "react";


export default function useAppData(scrollRef) {
	const theme = useTheme();

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
	const [loading, setLoading] = useState(true);

	const [state, setState] = useState({
		user: {
			isVisitor: true,
		},
		search: {
			currentResults: null,
		},
		scroller: null,
		headerColor: "dark",
		currentColor: [theme.palette.primary.yellow, "yellow"],
		sidebar: {
			showSidebar: false,
			hasShown: false,
		},
		cursor: {
			active: false,
		},
		isScrollLock: false,
		data: {
			isLoaded: false,
		},
		projects: [],
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

	const toggleCursorState = () => {
		setState(prev => ({
			...prev,
			cursor: { ...prev.cursor, active: !prev.cursor.active },
		}));
	};

	const setHeaderColor = color => {
		setState(prev => ({ ...prev, headerColor: color }));
	};

	const setCurrentColor = color => {
		setState(prev => ({ ...prev, currentColor: color }));
	};

	



	return {
		state,
		setState,
		navItems,
		transitioning,
		setTransitioning,
		cursor: { ...state.cursor },
		toggleCursorState,
		pending: state.pending,
		search: state.search,
		setSearch,
		headerColor: state.headerColor,
		setHeaderColor,
		currentColor: state.currentColor,
		setCurrentColor,
		loading,
		setLoading,
	};
}
