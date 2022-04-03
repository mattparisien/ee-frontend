import axios from "axios";
import { useEffect, useState } from "react";
import {
	formatAbout,
	formatPosts,
	formatSteps,
	formatStories
} from "../formatData";

export default function useAppData(scrollRef) {
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

	//App state
	const [transitioning, setTransitioning] = useState(true);

	const [state, setState] = useState({
		user: {
			isVisitor: true,
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
	});

	const changeCursor = value => {
		setState(prev => ({ ...prev, cursor: value }));
	};

	//Fetch essential data
	useEffect(() => {
		const basePath = process.env.REACT_APP_API_URL;

		const fetchURL = url => axios.get(url);

		const urls = [
			`${basePath}/projects?populate=*`,
			`${basePath}/steps`,
			`${basePath}/about`,
			`${basePath}/stories`,
			`${basePath}/footer`,
			`${basePath}/bio?populate=*`,
			`${basePath}/socials`,
		];

		const promiseArray = [...urls].map(fetchURL);

		Promise.all(promiseArray)
			.then(data => {
				const formattedPosts = formatPosts([...data[0].data.data]);
				const formattedSteps = formatSteps([...data[1].data.data]);
				const formattedAbout = formatAbout(data[2].data.data);
				const formattedStories = formatStories(data[3].data.data);
				const formattedFooter = data[4].data.data.attributes;
				const formattedBio = data[5].data.data.attributes;
				const formattedSocials = data[6].data.data.map(account => ({
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
						stories: formattedStories,
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
			.finally(() => setTransitioning(false));
	}, []);

	return {
		state,
		setState,
		navItems,
		transitioning,
		setTransitioning,
		cursor: state.cursor,
		changeCursor,
	};
}
