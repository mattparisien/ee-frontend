import create from "zustand";

const useStore = create(set => ({
	projects: [],
	addProject: projects => set(state => ({ projects: [...state.projects, projects] })),
}));
